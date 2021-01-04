import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}>Get next anecdote</button>
  )
}

const Vote = ({allVotes, current, setAllVotes}) => {
  let copy = [...allVotes]
  return (
    <button onClick={() => {
      copy[current] += 1
      setAllVotes(copy)
    }}>+1</button>
  )
}

const MostPopular = ( {allVotes}) => {
  const index = allVotes.indexOf(Math.max(...allVotes))

  if (allVotes[index] === 0) {
    return(<h2>None of the anecdotes have votes</h2>)
  }

  return (
    <>
    <h2>Anecdote with most votes</h2>
    <p>{anecdotes[index]}</p>
    <p>has {allVotes[index]} votes</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(6).fill(0))
  
  const handleClick = () => {
    let random = Math.floor(Math.random() * Math.floor(anecdotes.length))

    if (random === selected) {
      do {
        random = Math.floor(Math.random() * Math.floor(anecdotes.length))
      } while (random === selected)
    }

    setSelected(random)
  }

  return (
    <div>
      <center>
        <p>{props.anecdotes[selected]}</p>
        <p>has {allVotes[selected]} votes</p>
        <Vote allVotes={allVotes} current={selected} setAllVotes={setAllVotes} />
        <span>&nbsp;&nbsp;</span>
        <Button handleClick={handleClick}/>
        <MostPopular allVotes={allVotes} />
      </center>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)