const express = require('express');
const sequelize = require('./bd/conexion');
const Empleado = require('./models/Empleado');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/cantidad-empleado-depto', async (req,resp)=>{
    try {
        const data= await Empleado.findAll({
            attributes: [
                'department_id',
                'job_id',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cant_puesto_trabajo']],
            group: ['department_id', 'job_id'],
        })

        resp.status(200).json(data);
    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});
    }
});

app.get('/api/empleados-mes-ingreso', async (req,resp)=>{
    try {
        const data= await Empleado.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.fn('STR_TO_DATE', sequelize.col('HIRE_DATE'), '%d-%b-%y')), 'mes_numero'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_empleados']
            ],
            group: ['mes_numero'],
            raw: true,
            order: [[sequelize.literal('mes_numero'), 'ASC']]
        });

        if(data.length === 0){
            resp.status(400).json({message: 'No se encontraron datos'});
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});
    }
});

app.get('/api/promedio-salario-depto', async (req,resp)=>{
    try {
        const data= await Empleado.findAll({
            attributes: [
                'department_id',
                [sequelize.fn('AVG', sequelize.col('salary')), 'promedio_dept']
            ],
            group: ['department_id'],
        });

        if(data.length === 0){
            resp.status(400).json({message: 'No se encontraron datos'});
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});
    }
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});


