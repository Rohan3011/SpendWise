
const Resoures = () => {
    return (
        <div id="resoures" className='pt-12 h-screen bg-white'>
            <ResouresCard />
        </div>
    )
}

export default Resoures;

const ResouresCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-[100px] rounded-lg shadow-md bg-slate-800">
            <ResourcesCardText />
            <ResourcesCardVideo />
        </div>
    )
}



const ResourcesCardText = () => {
    return (
        <div className="p-8 flex flex-col gap-4 justify-center items-center">
            <h3 className="text-3xl md:text-5xl tracking-tight font-extrabold text-center text-white">
                Never manually update a spreadsheet again.
            </h3>
            <p className="text-lg sm:text-2xl text-center text-slate-400">
                Finotion imports your daily transactions and account balances from over 11,000 financial institutions and adds them to your Notion database automatically.
            </p>
        </div>
    )
}
const ResourcesCardVideo = () => {
    return (
        <div className="grow mt-10 overflow-hidden bg-white rounded-lg shadow-md h-[500px]">

        </div>
    )
}