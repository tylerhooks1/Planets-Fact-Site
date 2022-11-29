import React from 'react';
import chevronRight from '../assets/chevron-right.svg'



const MobileMenu = () => {
    return (
        <div id="mobileMenu" className='container mx-auto pt-5 px-4 transition-transform focus:translate-y-2 focus:ease-in-out focus:delay-200 block md:hidden' >
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-mercury h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Mercury</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-venus h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Venus</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-earth h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Earth</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-mars h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Mars</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-jupiter h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Jupiter</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-saturn h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }} >Saturn</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-uranus h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Uranus</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
            <div className='flex justify-between border-b-[1px] border-white/10 py-5'>
                <div className='flex'>
                    <div className='bg-neptune h-5 w-5 rounded-full mr-4 self-center' />
                    <a href="#" ><h4 className='block' style={{ fontSize: '15px' }}>Neptune</h4></a>
                </div>
                <img src={chevronRight} alt='chevron' className='max-h-3 max-w-2 self-center' />
            </div>
        </div>
    )
}

export default MobileMenu