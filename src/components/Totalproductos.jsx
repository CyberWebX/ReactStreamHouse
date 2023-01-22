import React, {useEffect, useState} from 'react'
import  {todosPersonajes} from '../funciones/funciones'


const TotalProductos = () => {
    const [personajes, setPersonajes] = useState (null)
    
   

    useEffect(() => {
        todosPersonajes(setPersonajes)
       
       
    },[])
    return (
        <>  
            <div>
            
                {personajes !== null ? (
                        personajes.length
                        
                ) : ('0')}  
            </div>
            
           
            
           
        </>
    )
}
export default TotalProductos