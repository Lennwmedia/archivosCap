import { useImage } from './hooks/useImage'
import { useFact } from './hooks/useFact'

export function App () {
  const { fact, refreshFact } = useFact()
  const { imageUrl } = useImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Hello People</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Primera palabra extraida del fact: ${fact}`}
        />
      )}
      <button onClick={handleClick}>Refrescar Fact</button>
    </main>
  )
}
