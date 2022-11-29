import React from 'react';




export default function Planet(props) {
    return (
        <>
            {/**Mobile Menu */}
            < div className='container mx-auto px-4' >

                <img className='self-center' src={`${props.planetImg}`} alt="planet" />
                <h2 className='text-center'>{props.name}</h2>
                <p className='text-center mx-10'>{props.overviewContent}</p>

            </div>
        </>

    )
}