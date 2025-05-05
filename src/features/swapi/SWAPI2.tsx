import { useState } from 'react'
import { useLazyGetSwapiQuery } from './swapiApiSlice'
// Import the lazy query hook from the API slice

// This component allows the user to input a character ID,
// then fetches and displays the corresponding data from the SWAPI using a lazy query.
export const SWAPI2 = () => {
  // Store the ID of the character to fetch
  const [id, setId] = useState(1)

  // useLazyGetSwapiQuery returns a trigger function and result state
  const [trigger, result, lastPromisedInfo] = useLazyGetSwapiQuery()

  // Debugging output
  console.log('---------')
  console.log('Result:', result)
  console.log('Last promised info:', lastPromisedInfo)
  console.log('---------')

  // A component to render loading, error, or successful data states
  const DisplayData = ({ result }) => {
    const { isError, isLoading, isSuccess, data, error } = result

    if (isError) {
      // Display a generic error message (consider typing and improving this)
      return <div>SWAPI Error!</div>
    }

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isSuccess && data) {
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
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="number"
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
        <button onClick={() => trigger(id)}>Submit</button>
      </form>
      <small>This component waits for a submit before loading data. You will need to click submit.</small>
      <div>****</div>
      <DisplayData result={result} />
      <div>****</div>
    </div>
  )
}
