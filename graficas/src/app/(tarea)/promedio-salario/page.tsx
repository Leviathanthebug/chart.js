'use client';
import { promedioSalarioPorDepartamento } from '@/services/api';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {
    
    
    const [charData, setCharData] = useState<any>({
        labels: [],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [
        {
            label: 'Maximo salario por departamento',
            data: [],
        }
        ]
    });

    useEffect(() => {
    promedioSalarioPorDepartamento().then((data) => {
        
        const labels = data.map((item: any) => item.department_id);
        const promedioDept = data.map((item: any) => item.promedio_dept);

      
        setCharData({
        labels: labels,
        datasets: [
          {
            label: 'Promedio salario por departamento',
            data: promedioDept,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          }
  
            ]
          });
        });
      }, []);


  return (
    <div>
        {
            charData ? (
                <div> <Pie data={charData} /></div>
            ) : (
                <p>Informacion cargando....</p>
            )
        }
    </div>
  )
}
