import React from 'react'
import Planet from './Planet'

const Home = () => {
    return (
        <Planet
            name="Mercury"
            overviewContent="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is
             one of four terrestrial planets in the Solar System, and 
             is a rocky body like Earth."
            overviewSource="https://en.wikipedia.org/wiki/Mercury_(planet)"
            structureContent="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , 
            only slightly less than Earth's density."
            structureSource="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
            geologyContent="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years.
             It is more heterogeneous than either Mars's or the Moon’s."
            geologySource="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
            rotation="58.6 Days"
            revolution="87.97 Days"
            radius="2,439.7 KM"
            temperature="430°c"
            planetImg="../assets/planet-mercury.svg"
            internalImg="../assets/planet-mercury-internal.svg"
            geologyImg="../assets/geology-mercury.png"


        />

    )
}

export default Home