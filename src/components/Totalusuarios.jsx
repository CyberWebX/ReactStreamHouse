import React, {useEffect, useState} from 'react'
import  {todosUsuarios} from '../funciones/funciones'


const TotalUsuario = () => {
    const [usuarios,  setUsuarios]  = useState(null) 
    useEffect(() => {
       
        todosUsuarios(setUsuarios)
    },[])
    return (
        <>
         <div>
         
                
                {usuarios !== null ? (
                    
                        usuarios.length
                        
                        
                ) : ('No Hay ')}  
            </div>
        </>
        
    )
}

export default TotalUsuario