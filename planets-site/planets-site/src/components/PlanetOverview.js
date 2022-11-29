import React from 'react'
import source from '../assets/icon-source.svg'

const PlanetOverview = (props) => {
    return (
        <div className='container mx-auto text-center' >
            <img className='scale-50 mx-auto' src={`${props.planetImg}`} alt="planet" />
            <h2 className='mb-4'>{props.name}</h2>
            <p className='mx-10 mb-8'>{props.overviewContent}</p>
            <div className=' text-center opacity-25 mb-6'>
                Source : <a className='underline decoration-white/[25] bold mr-2' href='#'>
                    Wikipedia
                </a>
                <img src={source} alt='source' className='inline ' />
            </div>
        </div>
    )
}

export default PlanetOverview