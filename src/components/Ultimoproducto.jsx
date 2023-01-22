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
                
            <h2> Ultimo Producto</h2>
                
                {personajes !== null ? ( <img alt= 'Ultimo Producto' clasName='ImgProduct' width='50' src= {'http://localhost:3001/images/productos/'+personajes[personajes.length-1].imagen}  ></img>): (' ')}
               
            
           
                
                {personajes !== null ? (
                    
                        personajes[personajes.length-1].nombre
                        
                ) : ('No Hay ')}  
            </div>
            
            
           
            
           
        </>
    )
}
export default Inicio