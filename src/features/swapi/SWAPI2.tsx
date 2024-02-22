import { useState } from 'react'
import { useGetSwapiQuery, useLazyGetSwapiQuery } from './swapiApiSlice'
// Import the hook from your slice

// This component displays both the form and the data loaded from the api hook. 
export const SWAPI2 = () => {
  // We'll use this to store the id of a character we want to load. 
  const [id, setId] = useState(1)
  // Use a lazy query
  const [trigger, result, lastPromisedInfo] = useLazyGetSwapiQuery()
  console.log('---------')
  console.log(result)
  console.log(lastPromisedInfo)
  console.log('---------')

  // Make a component to display loading, error, or data
  const DisplayData = ({ result }) => {
    const { isError, isLoading, isSuccess, data } = result
    // If there is an error. 
    if (isError) {
      // Display an error (I'm missing types for this!)
      return <div>swapi Error: {error.status} {error.data.detail}</div>
    }

    if (isLoading) {
      // Display a loading message 
      return <div>Swapi Loading...</div>
    }
    if (isSuccess) { 
      // Success! Display some data! 
      return (<div>
        <p>Name: { data.name } eye color: { data.eye_color } mass: {data.mass}</p>
      </div>)
    }
  }


  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input 
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
        <button
          onClick={() => trigger(id)}
        >Submit</button>
      </form>
      <div>****</div>
      <DisplayData result={result}/>
      <div>****</div>
    </div>
  )
}

