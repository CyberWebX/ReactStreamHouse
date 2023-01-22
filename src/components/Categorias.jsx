import React, {useEffect, useState} from 'react'
import  {todasCategorias} from '../funciones/funciones'


const Categoria = () => {
    const [categorias, setCategorias] = useState (null)
    useEffect(() => {
       
        todasCategorias(setCategorias)
       
    },[])
    return (
        <>
            <div>
                <h2> Categorias</h2>
                {categorias !== null ? (
                        categorias.map(categoria => (
                            <div key = {categoria.id} >  <li > {categoria.nombre} </li>
                            </div>
                            
                        )) 
                        
                ) : ('No Hay ')}  
            </div>
        </>
    )
}
export default Categoria