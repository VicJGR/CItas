import {useState, useEffect} from 'react';


const API = "http://localhost:5000/citas/random";


function CitaRandom(){

//inicializamos el state con un objeto vacio {} para que al hacer fetch a la api tengo algo que leer inicialmente
//aqui lo inicializo con un null para poder meter una panta
const[citar, setCitar]= useState(null)
const[pagina, setPagina]= useState(true)


        useEffect(()=>{
            console.log('hola')
            fetch(API)
            .then(resp => resp.json())
            .then(resp => setCitar(resp))
            .catch(error => console.log(error))
    
        }, [pagina])
//para que aparezca algo mientras se carga, mientras sea null se enseña un 'cargando'
        if(citar==null){
            return <h1>Cargando...</h1>
        }

       let estilo_imagen={
        width: '250px',
       }

       let estilo_texto={
        display:'inline-block',
       }

      
    return (
        <>
        <div>
            <img src={citar.url} style={estilo_imagen}/>
            <p style={estilo_texto}>{citar.texto}</p>
        </div>
        <button onClick={()=>setPagina(!pagina)}>Actualiza</button>
        
        </>
    )
}

export default CitaRandom