import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWraper from './PageWraper';
import PeliculasJson from './Peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual,setPaginaActual] = useState(1);
  let peliculas = PeliculasJson;
  Var AAA = "";
  return(
    <PageWraper>
        {peliculas.map(pelicula => 
  
            <Pelicula titulo = {pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha= {pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
            {pelicula.descripcion}
           </Pelicula>
  
        )}
        <Paginacion pagina={paginaActual} total={4} cuandoCambia={(pagina) => 
            setPaginaActual(pagina)
           }
        />
    </PageWraper>
  )
}
export default App;
