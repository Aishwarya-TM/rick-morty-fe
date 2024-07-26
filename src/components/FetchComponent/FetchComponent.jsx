import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './FetchComponent.css'
import CharacterComponent from '../CharacterComponent/CharacterComponent'

const FetchComponent = () => {
    const [userData,setUserData]=useState ({})
    const [pageno,setpageno]=useState(1)
    
    useEffect ( () =>
    {
        fetchComponentData()
    },[pageno])
    const fetchComponentData =async()=>
    {
        const response=await axios.get(`https://rickandmortyapi.com/api/character?page=${pageno}`)
        setUserData(response.data)
        console.log(response.data)
    }
    const incrementfn=()=>
    {
        setpageno(pageno+1)
    }
    const decrementfn=()=>
    {
        setpageno(pageno-1)
    }
  return (
    <React.Fragment>
        <center><h1 id='header'>Rick and Morty</h1><br /></center>
        
        <div className='main'>
        
                {userData.results && userData.results.map((character) => (
                    <CharacterComponent key={character.id} character={character}/>
                ))}                
            </div>
            <div className='button'>
            <div>
            <button 
            id='btn1' 
            disabled={pageno===1}
            onClick={decrementfn}>Previous</button>
            </div>
            <div>
           <button id='btn2'
           disabled={userData.info && userData.info.next===null}
           onClick={incrementfn}>Next</button>
            </div>
            </div>
    </React.Fragment>
  )
}

export default FetchComponent
 

