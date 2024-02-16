import { useEffect, useState } from 'react'

import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('efect: ', {enabled})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log({clientX, clientY})
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)

    }

    return () => {
      window.removeEventListener('pointermove', handleMove)

    }

  }, [enabled])

  useEffect(() => {
   document.body.classList.toggle('no-cursor', enabled)

   return(() => {
    document.body.classList.remove('no-cursor')

   })
  }, [enabled])


  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#89F',
        borderRadius: '58%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
     }}/>
   
    <button className='btn-activite' onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
    
  )

}

function App() {
  const [mounted, setMounted] = useState(true)


  return (

    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse
      </button>

    </main>
    
  )
}

export default App
