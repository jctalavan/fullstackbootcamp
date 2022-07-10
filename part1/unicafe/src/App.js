import './App.css';
import {useState} from 'react'
import {Statistics} from './components/Statistics.js'

const App = () => {

  const [good, setCountGood] = useState(0)
  const [neutral, setCountNeutral] = useState(0)
  const [bad, setCountBad] = useState(0)

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
      
      {
        (good + neutral + bad) === 0
          ? <h2>No feedback given</h2>
          : <Statistics good={good} neutral={neutral} bad={bad}/>
      }
      
    </div>
  )
}

export default App;