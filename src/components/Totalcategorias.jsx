import React, {useEffect, useState} from 'react'
import  {todasCategorias} from '../funciones/funciones'


const TotalCategorias = () => {
    const [categorias, setCategorias] = useState (null)
    useEffect(() => {
       
        todasCategorias(setCategorias)
       
    },[])
    return (
        <>
            <div>
                
                {categorias !== null ? (
                        categorias.length
                        
                ) : ('No Hay ')}  
            </div>
        </>
    )
}
export default TotalCategorias