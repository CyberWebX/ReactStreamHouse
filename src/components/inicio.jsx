import React, {useEffect, useState} from 'react'
import  {todosPersonajes} from '../funciones/funciones'


const Inicio = () => {
    const [personajes, setPersonajes] = useState (null)
  
   

    useEffect(() => {
        todosPersonajes(setPersonajes)
       
       
    },[])
    return (
        <>  
            <div>
            <h2> Productos</h2>
                {personajes !== null ? (
                        personajes.map(personaje => (
                            <div key = {personaje.id} >  
                                <img alt= '' className='ImgProduct' width='50' src= {'http://localhost:3001/images/productos/'+personaje.imagen}></img>
                                <a href= {'http://localhost:3001/images/productos/'+personaje.imagen}    target='_blank'> {personaje.nombre}  </a>
                            </div>
                            
                        )) 
                        
                ) : ('No Hay ')}  
            </div>
            
           
            
           
        </>
    )
}
export default Inicio