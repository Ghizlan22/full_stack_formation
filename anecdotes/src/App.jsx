import { useState } from 'react'

const anecdotes = [
  'Si ce n\'était pas pour mes chevaux de course, je ne parlerais pas du tout.',
  'L\'art de réussir consiste à essayer.',
  'La seule façon de faire du bon travail est d\'aimer ce qu\'on fait.',
  'Même si tu es sur la bonne voie, tu seras écrasé si tu restes assis là.',
  'La vérité vous rendra libre.',
  'C\'est en forgeant qu\'on devient forgeron.',
  'Si tu ne réussis pas la première fois, appelle ça version 1.0.',
  'L\'ordinateur a été créé pour résoudre les problèmes qu\'il n\'existait pas auparavant.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Bouton suivant (ex1.12)
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // Bouton vote (ex1.13)
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // Anecdote la plus votée (ex1.14)
  const mostVotedIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote du jour</h1>
      <p>{anecdotes[selected]}</p>
      <p>a {votes[selected]} votes</p>
      
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={nextAnecdote}>anecdote suivante</button>
      </div>

      <h2>Anecdote la plus votée</h2>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>a {votes[mostVotedIndex]} votes</p>
    </div>
  )
}

export default App
