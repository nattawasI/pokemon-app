import React from 'react'
import { usePokemonActionContext } from '../contexts/PokemonContext'
import Button from './Button'

const ButtonBackList = () => {
  // context
  const { getPokemonListContext } = usePokemonActionContext()

  // function
  const handleClick = () => {
    getPokemonListContext()
  }

  return (
    <Button
      variant="outline-white"
      onClick={ handleClick }
    >
      Back to Pokemon List
    </Button>
  )
}

export default ButtonBackList
