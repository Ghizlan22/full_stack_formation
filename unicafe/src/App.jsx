import { useState } from 'react'

// Header (ex1.10)
const Header = ({ text }) => <h1>{text}</h1>

// Button (ex1.9)
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Statistics (ex1.8 - gardé)
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td> 
          <td>{good}</td> 
        </tr>
        <tr>
          <td>neutral</td> 
          <td>{neutral}</td> 
        </tr>
        <tr>
          <td>bad</td> 
          <td>{bad}</td> 
        </tr>
        <tr>
          <td>all</td> 
          <td>{total}</td> 
        </tr>
        <tr>
          <td>average</td> 
          <td>{average.toFixed(1)}</td> 
        </tr>
        <tr>
          <td>positive</td> 
          <td>{positive.toFixed(1)} %</td> 
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // États (inchangés)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Fonctions pour boutons (ex1.9)
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      {/* Header component (ex1.10) */}
      <Header text='give feedback' />
      {/* Buttons components (ex1.9) */}
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
