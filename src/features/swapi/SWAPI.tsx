import { useState } from 'react'
import { useGetSwapiQuery } from './swapiApiSlice'
// Import the generated hook from the API slice

// This component renders a form to enter a character ID and displays the corresponding data from SWAPI.
export const SWAPI = () => {
  // Store the ID of the character to fetch
  const [id, setId] = useState(1)

  // If you want to use the lazy query variant, uncomment this:
  // const [trigger, result, lastPromisedInfo] = useLazyGetSwapiQuery()
  // console.log(result, lastPromisedInfo)

  // Use the query hook to fetch data from the SWAPI API
  const { data, isError, isLoading, isSuccess, error } = useGetSwapiQuery(id)

  // Debugging output to inspect the hook's state
  console.log('******* SWAPI *******')
  console.log('Data:', data)
  console.log('Error:', isError ? error : 'No error')
  console.log('Loading:', isLoading)
  console.log('Success:', isSuccess)
  console.log('********SWAPI *******')

  // Helper component to render the appropriate UI based on the query state
  const DisplayData = () => {
    if (isError) {
      // Display an error message. Consider adding a type for 'error' to avoid type warnings.
      return <div>SWAPI Error: {error.status} - {error.data?.detail}</div>
    }

    if (isLoading) {
      // Show a loading indicator
      return <div>Loading character data...</div>
    }

    if (isSuccess && data) {
      // Render the fetched character data
      return (
        <div>
          <p>
            Name: {data.name} | Eye Color: {data.eye_color} | Mass: {data.mass}
          </p>
        </div>
      )
    }

    return null
  }

  return (
    <div>
      <form>
        <input 
          type="number"
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
        <button
          // If using the lazy query, call trigger(id) here
          // onClick={() => trigger(id)}
          type="button"
        >
          Submit
        </button>
      </form>
      <small>This component loads data with input. Any time the field chnages data is loaded.</small>
      <div>---</div>
      <DisplayData />
      <div>---</div>
    </div>
  )
}
