export const Statistics = ({good, neutral, bad}) => {

    return (
        <>
      <h2>statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {
        (good + neutral + bad) > 0
          ? ((good - bad) / (good + neutral + bad))
          : 0
        }</p>
      <p>Positive: {
        (good + neutral + bad) > 0
          ? (good / (good + neutral + bad)) * 100
          : 0
        } %</p>

        </>
    )

}