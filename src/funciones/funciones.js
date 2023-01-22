import axios from 'axios'

const todosPersonajes = async (state) => {
    //const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    //const peticion = await axios.get('https://streamhouse-83jf.onrender.com/api/productos')
    const peticion = await axios.get('http://localhost:3001/api/productos')

    //state(peticion.data.results);
    //console.log((peticion.data.data))
    state(peticion.data.data);
}
const todasCategorias = async (state) => {
    const peticion2 = await axios.get('http://localhost:3001/api/categorias')
    //console.log(peticion2.data.data)
    state(peticion2.data.data);

}
const todosUsuarios = async (state) => {
    const peticion3 = await axios.get('http://localhost:3001/api/usuarios')
    console.log(peticion3.data.data)
    state(peticion3.data.data);

}
export {
    todosPersonajes,todasCategorias,todosUsuarios
}