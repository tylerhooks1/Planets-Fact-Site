import React from 'react'
import source from '../assets/icon-source.svg'
import SubMenuBtns from './SubMenuBtns'
import PlanetFacts from './PlanetFacts';

const PlanetSturcture = (props) => {
    return (
        <div className='container mx-auto relative px-4 md:px-5 lg:px-8 text-center' >
            <img className='scale-50 mx-auto  md:inset-x-28 md:scale-75' src={`${props.internalImg}`} alt="planet" />
            <div className=' md:top-96 mt-24 px-6'>
                <h2 className='mb-4 md:text-left'>{props.name}</h2>
                <div className='md:flex md:grid md:grid-cols-2 mb-8 md:items-center '>
                    <p className='mx-10 md:mx-0 md:text-left'>{props.structureContent}</p>

                    <SubMenuBtns
                        name={props.name}
                    />

                    <div className='text-center md:text-left opacity-50 mb-6'>
                        Source : <a className='underline decoration-white/[25] bold mr-2' href={`${props.strucutureSource}`}>
                            Wikipedia
                        </a>
                        <img src={source} alt='source' className='inline' />
                    </div>
                </div>

            </div>
            <PlanetFacts
                rotation={props.rotation}
                revolution={props.revolution}
                radius={props.radius}
                temperature={props.temperature}
            />
        </div >
    )
}

export default PlanetSturcture