
const Features = () => {
    return (
        <div id="features" className='pt-12 flex flex-col gap-10 bg-gray-100'>
            <FeatureCardRight />
            <FeatureCardLeft />
            <FeatureCardRight />
            <FeatureCardLeft />
        </div>
    )
}

export default Features;


const FeatureCardRight = () => {
    return (
        <div className="w-full p-8 lg:px-[100px] lg:py-8 flex flex-col lg:flex-row">
            <FeatureCardVideo />
            <FeatureCardText />
        </div>
    )
}
const FeatureCardLeft = () => {
    return (
        <div className="w-full p-8 lg:px-[100px] lg:py-8 flex flex-col lg:flex-row">
            <FeatureCardText />
            <FeatureCardVideo />
        </div>
    )
}
const FeatureCardText = () => {
    return (
        <div className="md:w-1/2 p-8 flex flex-col gap-4 justify-center items-center">
            <h3 className="text-3xl md:text-5xl tracking-tight font-extrabold text-center text-slate-800">
                Never manually update a spreadsheet again.
            </h3>
            <p className="text-lg sm:text-2xl text-center text-slate-600">
                Finotion imports your daily transactions and account balances from over 11,000 financial institutions and adds them to your Notion database automatically.
            </p>
        </div>
    )
}
const FeatureCardVideo = () => {
    return (
        <div className="grow bg-white rounded-lg shadow-md h-[500px]">

        </div>
    )
}