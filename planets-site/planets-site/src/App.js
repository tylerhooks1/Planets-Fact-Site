import './index.css';
import { Routes, Route } from 'react-router-dom';
import Planets from './data.json';
import Navbar from './components/Navbar';
import Planet from './components/Planet';
import Home from './components/Home'



function App() {
  return (
    <>
      <body className="text-white bg-cover bg-repeat bg-midnight bg-[url('assets/background-stars.svg')] min-h-screen scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}
          />
          {Planets.map((data, key) => {
            return (
              <Route
                path={`${data.name}/*`}
                key={`${data.name}`}
                element={
                  <Planet
                    name={data.name}
                    overviewContent={data.overview.content}
                    overviewSource={data.overview.source}
                    structureContent={data.structure.content}
                    structureSource={data.structure.source}
                    geologyContent={data.geology.content}
                    geologySource={data.geology.source}
                    rotation={data.rotation}
                    revolution={data.revolution}
                    radius={data.radius}
                    temperature={data.temperature}
                    planetImg={data.images.planet}
                    internalImg={data.images.internal}
                    geologyImg={data.images.geology}
                    color={data.color}
                  />
                }
              />
            )

          })}
        </Routes>
      </body>
    </>
  );
}

export default App;
