import Link from 'next/link'

const PageTitle = ({ title, link }) => {
    return (
        <div className='p-4'>
            <Link passHref href={link}>
                <a className='text-5xl font-bold text-slate-600'>{title}</a>
            </Link>
        </div>
    )
}

export default PageTitle;