import React from 'react'

const CharacterComponent = ({character}) => {
  return (
    <div className='box'>  
      <div><img src={character.image} id='img'/></div>
      <div className='box1'>
      <h2 className='box1'>{character.name}</h2>
      <p className='box1'>{character.status} - {character.species}</p>
      <p className='box2'>Last Seen On</p>
      <p className='box1'>{character.location.name}</p>
      </div>
                        
      </div>
                   
  )
}

export default CharacterComponent