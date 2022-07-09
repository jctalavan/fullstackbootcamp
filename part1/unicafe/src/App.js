import './App.css';
import {useState} from 'react'

const App = () => {

  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)

  const handleClickGoodBtn = () => {
    setCountGood(prevCount => prevCount + 1);
  }

  const handleClickNeutralBtn = () => {
    setCountNeutral(prevCount => prevCount + 1);
  }

  const handleClickBadBtn = () => {
    setCountBad(prevCount => prevCount + 1);
  }

  return (

    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleClickGoodBtn}>good</button>
      <button onClick={handleClickNeutralBtn}>neutral</button>
      <button onClick={handleClickBadBtn}>bad</button>

      <br />
      
      <h2>statistics</h2>
      <p>Good: {countGood}</p>
      <p>Neutral: {countNeutral}</p>
      <p>Bad: {countBad}</p>
      <p>All: {countGood + countNeutral + countBad}</p>
      <p>Average: {
        (countGood + countNeutral + countBad) > 0
          ? ((countGood - countBad) / (countGood + countNeutral + countBad))
          : 0
        }</p>
      <p>Positive: {
        (countGood + countNeutral + countBad) > 0
          ? (countGood / (countGood + countNeutral + countBad)) * 100
          : 0
        } %</p>
    </div>
  )
}

export default App;