import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({title, number}) => <div>{title} {number}</div>

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all > 0) {
    return (
      <div>
          <StatisticLine title="Good" number={good}></StatisticLine>
          <StatisticLine title="Neutral" number={neutral}></StatisticLine>
          <StatisticLine title="Bad" number={bad}></StatisticLine>
          <StatisticLine title="All" number={all}></StatisticLine>
          <StatisticLine title="Average" number={average}></StatisticLine>
          <StatisticLine title="Positive" number={positive}></StatisticLine>
      </div>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all * 100).toFixed(2) + "%"

  return (
    <div>
      <Header text="Give feedback"></Header>
      <Button handleClick={incrementGood} text="Good"></Button>
      <Button handleClick={incrementNeutral} text="Neutral"></Button>
      <Button handleClick={incrementBad} text="Bad"></Button>
      <Header text="StatisticLine"></Header>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Statistics>
    </div>
  )
}

export default App