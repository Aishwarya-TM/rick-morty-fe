import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import CharacterComponent from '../CharacterComponent/CharacterComponent'

const ReactQueryComponent = () => {
    const [pageNumber,setPageNumber] = useState(1)

  const getDataFromAPI = async({queryKey}) =>
  {
     const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
     return response.data
  }
  const {data, isPreviousData, isError, isLoading} = useQuery(['characters',pageNumber], getDataFromAPI,
  {
    keepPreviousData : true
  })
 
  if(isLoading)
  {
    return <div>Loading</div>
  }
  if(isError)
  {
    return <div>Error</div>
  }

    const moveToNextPage = () => {
        setPageNumber((oldPageNumber => oldPageNumber + 1))
    }
    const moveToPreviousPage = () => {
        setPageNumber(oldPageNumber => oldPageNumber - 1)
    }
    return (
        <React.Fragment>
            <div className='characters'>
              {data.results && data.results.map((character) => (
                <CharacterComponent key={character.id} character = {character}/>
              ))}
                <div>
                <button 
                    disabled = {pageNumber === 1}
                    id='prev-page' 
                    onClick = {moveToPreviousPage}>
                        Previous Page
                </button>
                <button 
                    disabled = {isPreviousData || !data.info.next}
                    id='next-page' 
                    onClick={moveToNextPage}>
                        Next Page
                </button>
                </div>
            </div>
        </React.Fragment>
      )
    }
    

export default ReactQueryComponent