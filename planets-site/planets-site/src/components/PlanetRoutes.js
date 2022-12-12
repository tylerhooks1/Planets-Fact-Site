import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PlanetOverview from './PlanetOverview';
import PlanetSturcture from './PlanetSturcture';
import PlanetSurface from './PlanetSurface';


const PlanetRoutes = (props) => {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PlanetOverview
                        name={props.name}
                        overviewContent={props.overviewContent}
                        overviewSource={props.overviewSource}
                        planetImg={props.planetImg}
                        rotation={props.rotation}
                        revolution={props.revolution}
                        radius={props.radius}
                        temperature={props.temperature}
                    />
                }
            />
            <Route
                path={`Overview`}
                element={
                    <PlanetOverview
                        name={props.name}
                        overviewContent={props.overviewContent}
                        overviewSource={props.overviewSource}
                        planetImg={props.planetImg}
                        rotation={props.rotation}
                        revolution={props.revolution}
                        radius={props.radius}
                        temperature={props.temperature}
                    />
                }
            />
            <Route
                path={'Structure'}
                element={
                    <PlanetSturcture
                        name={props.name}
                        structureContent={props.structureContent}
                        structureSource={props.structureSource}
                        internalImg={props.internalImg}
                        rotation={props.rotation}
                        revolution={props.revolution}
                        radius={props.radius}
                        temperature={props.temperature}
                    />
                }
            />
            <Route
                path={'Surface'}
                element={
                    <PlanetSurface
                        name={props.name}
                        geologyContent={props.geologyContent}
                        geologySource={props.geologySource}
                        geologyImg={props.geologyImg}
                        rotation={props.rotation}
                        revolution={props.revolution}
                        radius={props.radius}
                        temperature={props.temperature}
                    />
                }
            />
        </Routes>


    )
}

export default PlanetRoutes