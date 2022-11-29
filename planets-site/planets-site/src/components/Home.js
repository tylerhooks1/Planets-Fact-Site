import React from 'react'
import Navbar from './Navbar'
import Planet from './Planet'

const Home = () => {
    return (
        <>
            <Navbar />
            <Planet name="mercury" />
        </>
    )
}

export default Home