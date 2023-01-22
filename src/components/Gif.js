import React, {Component} from 'react';
//import PropTypes from 'prop-types';

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        }
    }
    apiCall(url,consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch (error => console.log(error))
           
    }
    componentDidMount(){
       // console.log("me monte");
       this.traerGifNuevo()
    }
    traerGifNuevo(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=gq8R5QC2kEQwVDBhuHnTEZCq4XtgTLdD&tag=&rating=g", this.mostrarGift)
    }
    mostrarGift = (data) => {
        console.log(data);
       
        this.setState(
            {
                gif:data.data.images.downsized.url
            }
        )
    }

    componentDidUpdate(){
        //console.log("me actualice");
      //alert("Tengo un Gif Nuevo")

    }

    render(){
       //console.log("estoy renderizado");
       let contenido;
       if (this.state.gif === ""){
          contenido = <p>Cargando...</p>
       }else {
          contenido = <img alt= "" src={this.state.gif}></img>
       }


        return  (
            <div>
                {contenido}
                <button onClick={() => this.traerGifNuevo}> Ramdom Gif!</button>

            </div>
            
        );



    }




}
export default Gif;