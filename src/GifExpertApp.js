
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{

    const [categorias, setCategorias] = useState([]);

  /*  const handleAdd=()=>{
        const anime='Udemy';
        
        setCategorias([...categorias, anime]);
    }
*/
    return(
        <>
        <h2>¿QUÉ ESTAS BUSCANDO?</h2>
        <AddCategory  setCategorias={setCategorias} />

        <hr/>

        <ol>
            {
                categorias.map(categoria =>(
                    <GifGrid
                        key={categoria} 
                        categoria={categoria}
                    />
                ))
            }
        </ol>
        </>
    );
}

export default GifExpertApp;