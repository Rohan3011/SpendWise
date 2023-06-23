import React from 'react'
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

const BarChart = () => {
    return (
        <div className='max-h-[360px] m-4 p-4 grow bg-white shadow-md rounded'>
            < Bar
                className=''
                data={{
                    datasets: [{
                        data: [10, 30, 59, 23, 12, 22, 31],
                        backgroundColor: [
                            'rgb(255, 99, 132, 0.4)',
                            'rgb(54, 162, 235, 0.4)',
                            'rgb(255, 205, 86, 0.4)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132 )',
                            'rgb(54, 162, 235 )',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4

                    }],
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

                }}
            />
        </div>
    )
}

export default BarChart;