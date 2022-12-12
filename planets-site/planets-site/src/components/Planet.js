import React from 'react';
import MobileSubMenu from './MobileSubMenu';
import PlanetRoutes from './PlanetRoutes';


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
                rotation={props.rotation}
                revolution={props.revolution}
                radius={props.radius}
                temperature={props.temperature}
            />
        </>

    )
}