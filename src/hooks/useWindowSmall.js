import { useState, useEffect } from 'react'

const UseWindowSmall = () => {
  const maxWindowWidth = 768
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const checkScreenSize = () => {
    if (window.matchMedia(`(max-width: ${ maxWindowWidth }px)`).matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isSmallScreen
}

export default UseWindowSmall
