import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    async function facto () {
      const newFact = await getRandomFact()
      setFact(newFact)
    }
    facto()
  }
  useEffect(refreshFact
  /* () => {
    getRandomFact().then(setFact)
  } */, [])
  return { fact, refreshFact }
}
