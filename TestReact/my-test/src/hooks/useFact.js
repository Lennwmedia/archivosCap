import { useState, useEffect } from 'react'
import { getRamdomFact } from '../services/facts'

export function useFact () {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRamdomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}