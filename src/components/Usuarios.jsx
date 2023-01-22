import React, {useEffect, useState} from 'react'
import  {todosUsuarios} from '../funciones/funciones'

const Usuario = () => {
    const [usuarios,  setUsuarios]  = useState(null) 
    useEffect(() => {
       
        todosUsuarios(setUsuarios)
    },[])
    return (
        <>
         <div>
         
                <h2> Usuarios</h2>
                {usuarios !== null ? (
                    
                        usuarios.map(usuario => (
                            <div key = {usuario.id} >  <li > {usuario.nombre} </li>
                            </div>
                            
                        )) 
                        
                        
                ) : ('No Hay ')}  
            </div>
        </>
        
    )
}

export default Usuario