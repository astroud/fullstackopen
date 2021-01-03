import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(<button onClick={handleClick} >{text}</button>)
}

const Feedback = ({good, neutral, bad, setGood, setNeutral, setBad}) => {
  return(
    <div>
      <h1>How was your experience?</h1>
      <Button handleClick={() => setGood(good + 1)} text="😄 Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="😐 Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="☹️ Bad"/>
    </div>
  )
}

const Statistics = ({goodVotes, neutralVotes, badVotes}) => {
  const total = goodVotes + neutralVotes + badVotes
  let average = (goodVotes * 1 + badVotes * -1) / total
  let positivePercentage = goodVotes / total
  
  if(total === 0) {
    return(
      <div>
        <h3>Statistics</h3>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h2>Customer Feedback</h2>
      <p>😄 Good: {goodVotes}</p>
      <p>😐 Neutral: {neutralVotes}</p>
      <p>☹️ Bad: {badVotes}</p>
      <h3>Statistics</h3>
      <p>Total responses: {total}</p>
      <p>Average: {average}</p>
      <p>Postive: {positivePercentage * 100} %</p>
    </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback good={good} setGood={setGood}
                neutral={neutral} setNeutral={setNeutral}
                bad={bad} setBad={setBad}
      />
      <Statistics goodVotes={good}
                  neutralVotes={neutral}
                  badVotes={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)