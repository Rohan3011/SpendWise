import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const PieChart = () => {
    return (
        <div className='max-w-3xl bg-white shadow-md rounded-lg flex flex-col gap-2'>
            <Doughnut
                className='p-8'
                data={{
                    datasets: [{
                        data: [10, 30, 59, 23],
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

export default PieChart;


const PieChartFooter = () => {
    return (
        <div className="stats shadow">
            <PieChartFooterStats title={"something"} value={"33, 333"} desc={"21% increase form last month"} />
            <PieChartFooterStats title={"something"} value={"33, 333"} desc={"21% increase form last month"} />
            <PieChartFooterStats title={"something"} value={"33, 333"} desc={"21% increase form last month"} />
        </div>
    )
}

const PieChartFooterStats = ({ title, value, desc }) => {
    return (

        <div className="stat">
            <div className="stat-title">{title}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-desc">{desc}</div>
        </div>

    )
}