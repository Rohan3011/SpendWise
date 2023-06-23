import React from 'react'

const InputCardSubmit = ({ handleSubmit }) => {
    return (
        <section className='grow flex space-x-2 pt-4 justify-end'>
            <button
                className='border border-white hover:border-slate-500 px-6 py-1 rounded text-slate-500'
                onSubmit={handleSubmit} >
                Discard
            </button>
            <button
                className='bg-slate-500 hover:bg-slate-400 px-8 py-2 rounded text-white'
                onSubmit={handleSubmit} >
                Add
            </button>
        </section>
    )
}

export default InputCardSubmit;