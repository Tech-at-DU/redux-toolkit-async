import { useState } from "react"
import styles from "./Quotes.module.css"
import { useGetQuotesQuery } from "./quotesApiSlice"

// Options for the number of quotes to fetch
const options = [5, 10, 20, 30]

export const Quotes = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10)

  // Fetch quotes using the RTK Query hook
  const { data, isError, isLoading, isSuccess } = useGetQuotesQuery(numberOfQuotes)

  // Check for errors
  if (isError) {
    return (
      <div className={styles.container}>
        <h1>There was an error fetching quotes.</h1>
      </div>
    )
  }

  // Are we loading? 
  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1>Loading quotes...</h1>
      </div>
    )
  }

  // No errors and done loading!
  if (isSuccess && data) {
    return (
      <div className={styles.container}>
        <h3>Select the number of quotes to display:</h3>
        <select
          className={styles.select}
          value={numberOfQuotes}
          onChange={(e) => setNumberOfQuotes(Number(e.target.value))}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {data.quotes.map(({ id, quote, author }) => (
          <blockquote key={id} className={styles.quote}>
            &ldquo;{quote}&rdquo;
            <footer>
              <cite>{author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    )
  }

  return null
}
