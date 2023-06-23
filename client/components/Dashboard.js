import ExpenseGraph from "./ExpenseGraph";
import PieChart from "./PieChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col p-4 justify-center items-center lg:flex-row gap-2">
            <PieChart />
            <ExpenseGraph />
        </div>
    )
}

export default Dashboard;