

import React, {Component} from 'react';

import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/inicio'
import Personaje from './components/Personajes'
import Categoria from  './components/Categorias'
import Usuario   from  './components/Usuarios'
import TotalUsuario   from  './components/Totalusuarios'
import TotalProducto  from './components/Totalproductos'
import TotalCategorias  from './components/Totalcategorias'
import UltimoProducto  from './components/Ultimoproducto'






function App() {
  return (
    <div className="contenedor">

          <header >
            <div className='row'>
            <div  className="col-xs-12 col-sm-12 col-md-3 " >
                                                           <div  className="logo" >
                                                                   <img alt='logo' id="logonombre" src="https://www.cyberwebx.net/img/iconoynombre.png" ></img>
                                                           </div>
                                                   </div>
            </div>
            
          </header>
          <div className='espaciar'>

          </div>
          <div className='row panelRight'>
              <div  className="col-xs-12 col-sm-12 col-md-6 " >
                <div className='modulo1'>
                      <Inicio></Inicio>
                      
                </div>
              </div>
              <div  className="col-xs-12 col-sm-12 col-md-6 " >
                      <div className="col-xs-12 col-sm-6 col-md-6 modulo2">
                              <Categoria></Categoria>
                        
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 modulo3">
                          <Usuario></Usuario>
                            
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 modulo2">
                          <UltimoProducto></UltimoProducto>
                            
                      </div>
              </div>
          </div>
          
                
          <br></br>
          <div className='modulo4'>
                    <h2> Totales</h2>
          
                    <div className='row' >
                    
                          <div className='col-xs-4 col-sm-4 col-md-4'>
                            Total de  Usuarios: <TotalUsuario></TotalUsuario>

                          </div>
                          <div className='col-xs-4 col-sm-4 col-md-4'>
                            Total de Productos: <TotalProducto></TotalProducto>
                          </div>   
                          <div className='col-xs-4 col-sm-4 col-md-4'>
                            Total de Categorias: <TotalCategorias></TotalCategorias>
                          </div>  
                      </div>
               
  
              
          </div>

          <div className='row'>
                <div className='col-xs-4 col-sm-4 col-md-4'>

                </div>

          </div>
          
          
          
     
    </div>
  );
}

export default App;
