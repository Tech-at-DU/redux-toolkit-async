import { useState } from 'react'
import { useGetSwapiQuery } from './swapiApiSlice'
// Import the hook from your slice

// This component displays both the form and the data loaded from the api hook. 
export const SWAPI = () => {
  // We'll use this to store the id of a character we want to load. 
  const [id, setId] = useState(1)
  // Use the api hook we created to load data from the web api
  const { data, isError, isLoading, isSuccess, error } = useGetSwapiQuery(id)

  // Testing! 
  console.log(data)
  console.log(isError)
  console.log(error)
  console.log(isLoading)
  console.log(isSuccess)
  console.log('**************')

  // Make a component to display loading, error, or data
  const DisplayData = () => {
    // If there is an error. 
    if (isError) {
      // Display an error
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
      <form>
        <input 
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
        <button>Submit</button>
      </form>
      <div>****</div>
      <DisplayData />
      <div>****</div>
    </div>
  )
}

