import React from 'react'
import SubMenuBtns from './SubMenuBtns'
import source from '../assets/icon-source.svg'

const PlanetOverview = (props) => {
    return (
        <div className='container mx-auto text-center' >
            <img className='scale-50 mx-auto' src={`${props.planetImg}`} alt="planet" />
            <div className='md:flex md:grid md:grid-cols-2'>
                <div className='md:text-left '>
                    <h2 className='mb-4'>{props.name}</h2>
                    <p className='mx-10 mb-8 md:mx-0'>{props.overviewContent}</p>
                </div>
                <SubMenuBtns />
            </div>
            <div className='text-center md:text-left opacity-50 mb-6'>
                Source : <a className='underline decoration-white/[25] bold mr-2' href={`${props.overviewSource}`}>
                    Wikipedia
                </a>
                <img src={source} alt='source' className='inline ' />
            </div>
        </div>
    )
}

export default PlanetOverview