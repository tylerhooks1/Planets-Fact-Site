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
                    />
                }
            />
            <Route
                path={`overview`}
                element={
                    <PlanetOverview
                        name={props.name}
                        overviewContent={props.overviewContent}
                        overviewSource={props.overviewSource}
                        planetImg={props.planetImg}
                    />
                }
            />
            <Route
                path={'structure'}
                element={
                    <PlanetSturcture
                        name={props.name}
                        structureContent={props.structureContent}
                        structureSource={props.structureSource}
                        internalImg={props.internalImg}
                    />
                }
            />
            <Route
                path={'surface'}
                element={
                    <PlanetSurface
                        name={props.name}
                        geologyContent={props.geologyContent}
                        geologySource={props.geologySource}
                        geologyImg={props.geologyImg}
                    />
                }
            />
        </Routes>
    )
}

export default PlanetRoutes