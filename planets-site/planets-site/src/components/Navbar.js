import React, { useState } from 'react';
import Planets from '../data.json';
import menuIcon from '../assets/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';



export default function Navbar() {
    const [state, setState] = useState(true);

    const toggle = () => {
        setState(!state)
    }

    return (
        <>
            <div className='border-b-[1px] border-white/25'>
                <div className='container mx-auto px-4 py-4  md:px-0 md:py-8'>
                    <div className='flex justify-between md:max-lg:justify-center md:max-lg:flex-wrap md:max-lg:grid md:max-lg:grid-rows-1  '>
                        <h2 className='text-2xl tracking-wide md:text-center md:mb-8 lg:mb-0'>The Planets</h2>
                        <button onClick={toggle} className=''>
                            {state ?
                                <img src={menuIcon} alt="menu" id="menuIcon" className='max-h-4 max-w-sm self-center block md:hidden fill-white transition-all ease-in-out' />
                                :
                                <img src={menuIcon} alt="menu" id="menuIcon" className='max-h-4 max-w-sm self-center block md:hidden fill-white opacity-25 hover:fill-white transition-all ease-in-out' />
                            }
                        </button>
                        <div className='hidden md:block'>
                            {Planets.map((data, key) => {
                                return (<Link to={`${data.name}`} key={key} ><h4 className='inline-block ml-3 md:ml-8 opacity-75'>{data.name}</h4></Link>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {state ?
                <div className='hidden'>
                    <MobileMenu />
                </div>
                :
                <div className='block '>

                    <MobileMenu />
                </div>
            }
        </>
    )
}


