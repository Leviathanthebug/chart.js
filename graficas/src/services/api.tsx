import axios from "axios";


const API_URL = 'http://localhost:5000/api';

export const cantidadEmpleadosPorMes = async () => {
    const response = await axios.get(`${API_URL}/empleados-mes-ingreso`);
    return response.data;
}

export const promedioSalarioPorDepartamento = async () => {
    const response = await axios.get(`${API_URL}/promedio-salario-depto`);
    return response.data;
}

export const cantidadEmpleadosPorMesPuesto = async () => {
    const response = await axios.get(`${API_URL}/cantidad-empleado-depto`);
    return response.data;
}   

