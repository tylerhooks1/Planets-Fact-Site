import React from 'react';




export default function Planet(props) {
    return (
        <>
            {/**Mobile Menu */}

            <div className='border-b-[1px] border-white/25 mb-24'>
                <div className='container mx-auto px-5 py-2 flex justify-between uppercase opacity-25' style={{ fontSize: '9px' }}>
                    <a href='#' className='hover:opactiy-100 focus:opacity-100'>overview</a>
                    <p>structure</p>
                    <p>Surface</p>
                </div>
            </div>
            < div className='container mx-auto px-4' >
                <img className='h-28 w-28 mx-auto mb-24' src={`${props.planetImg}`} alt="planet" />
                <h2 className='text-center mb-4'>{props.name}</h2>
                <p className='text-center mx-10 mb-8'>{props.overviewContent}</p>

            </div>
        </>

    )
}