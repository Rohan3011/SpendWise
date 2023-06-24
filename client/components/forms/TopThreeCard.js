import React from 'react'

const TopThreeCard = () => {
    return (
        <div className='shadow rounded p-4 '>
            <div className='flex gap-2'>
                <TopELement name="top1" />
                <TopELement name="top2" />
                <TopELement name="top3" />
            </div>
        </div>
    )
}

export default TopThreeCard;

const TopELement = ({ name }) => {
    return (
        <div className=''>
            <h1>{name}</h1>
        </div>
    )
}