import { useState, useEffect } from 'react'

const PREFIX_URL = 'https://cataas.com'

export function useImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${firstWord}`
        setImageUrl(url)
        console.log(url)
      })
  }, [fact])

  return { imageUrl: `${PREFIX_URL}${imageUrl}` }
}