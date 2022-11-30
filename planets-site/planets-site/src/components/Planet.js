import React from 'react';
import MobileSubMenu from './MobileSubMenu';
import PlanetRoutes from './PlanetRoutes';
import SubMenuBtns from './SubMenuBtns';



export default function Planet(props) {
    return (
        <>
            <MobileSubMenu />
            <PlanetRoutes
                name={props.name}
                overviewContent={props.overviewContent}
                overviewSource={props.overviewSource}
                planetImg={props.planetImg}
                structureContent={props.structureContent}
                structureSource={props.structureSource}
                internalImg={props.internalImg}
                geologyContent={props.geologyContent}
                geologySource={props.geologySource}
                geologyImg={props.geologyImg}
            />

            <div className='container mx-auto px-6 grid grid-rows-4 gap-y-2 pb-8 md:grid-cols-4 md:gap-x-2 md:px-0 md:grid-rows-none'>
                <div className='border border-white/25 py-4 px-6 flex justify-between uppercase md:grid md:grid-row-2'>
                    <p className='opacity-50 self-center'>Rotation Time</p>
                    <h2 className='text-xl'>{props.rotation}</h2>
                </div>
                <div className='border border-white/25 py-4 px-6 flex justify-between uppercase md:grid md:grid-row-2'>
                    <p className='opacity-50 self-center'>Revolution Time</p>
                    <h2 className='text-xl'>{props.revolution}</h2>
                </div>
                <div className='border border-white/25 py-4 px-6 flex justify-between uppercase md:grid md:grid-row-2'>
                    <p className='opacity-50 self-center'>Radius</p>
                    <h2 className='text-xl'>{props.radius}</h2>
                </div>
                <div className='border border-white/25 py-4 px-6 flex justify-between uppercase md:grid md:grid-row-2'>
                    <p className='opacity-50 self-center'>Average Temp.</p>
                    <h2 className='text-xl'>{props.temperature}</h2>
                </div>
            </div>

        </>

    )
}