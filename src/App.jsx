import React from 'react'
import FetchComponent from './components/FetchComponent/FetchComponent'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQueryComponent from './components/ReactQueryComponent/ReactQueryComponent'
const queryClient = new QueryClient()

const App = () => {
//   return (
//     <FetchComponent/>
//   )
// }
return (
  <div className='App'>
    <div className='main-container'>
      <h1>Rick and Morty</h1>
      <QueryClientProvider client={queryClient}>
      <ReactQueryComponent />
      </QueryClientProvider>
      </div>
  </div>
)
}




export default App