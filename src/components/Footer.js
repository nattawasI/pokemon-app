import React, { useState, useEffect } from 'react'
import { usePokemonStateContext } from '../contexts/PokemonContext'
import Pagination from './Pagination'

const Footer = () => {
  // context
  const { limitPerPageContext, pokemonListContext, prevUrlContext, nextUrlContext, fetchEventContext } = usePokemonStateContext()

  // state
  const [ showFooter, setShowFooter ] = useState(false)

  // useEffect
  useEffect(() => {
    if (fetchEventContext === 'search') {
      setShowFooter(false)
    } else if (pokemonListContext.length >= limitPerPageContext) {
      if (prevUrlContext || nextUrlContext) {
        setShowFooter(true)
      } else {
        setShowFooter(false)
      }
    } else {
      if (!nextUrlContext) {
        setShowFooter(false)
      }
    }
  }, [limitPerPageContext, pokemonListContext, prevUrlContext, nextUrlContext, fetchEventContext])

  return (
    <>
      {
        showFooter
        &&  <div className="footer">
              <Pagination />
            </div>
      }
    </>
  )
}

export default Footer
