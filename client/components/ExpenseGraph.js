import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ExpenseGraph = () => {
    return (
        <div className='grow w-full max-h-[360px] shadow-md bg-white rounded-lg'>
            <Line
                className='p-8'
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [

                        {
                            type: 'line',
                            label: 'Income',
                            data: [20, 3, 22, 31, 22, 30, 10, 33, 22, 32],
                            fill: true,
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgb(54, 162, 235,0.2)'
                        },
                        {
                            label: 'Expenditure',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            fill: true,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
                height={380}
            />
        </div>
    )
}

export default ExpenseGraph;