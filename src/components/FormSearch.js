import React, { useState, useRef } from 'react'
import { usePokemonStateContext, usePokemonActionContext } from '../contexts/PokemonContext'
import InputText from './InputText'
import Button from './Button'

const FormSearch = () => {
  // context
  const { valueSearchContext } = usePokemonStateContext()
  const { changeValueSearchContext, searchPokemonContext } = usePokemonActionContext()
  // ref
  const inputRef = useRef(null)

  // state
  // const [valueInput, setValueInput] = useState('')
  const [errorInput, setErrorInput] = useState(false)

  // function
  const handleSubmit = (e) => {
    e.preventDefault()
    if (valueSearchContext) {
      searchPokemonContext()
    } else {
      setErrorInput(true)
    }
  }

  const handleInputChange = (value) => {
    setErrorInput(false)
    changeValueSearchContext(value)
  }

  return (
    <form className="form-input-search" onSubmit={ handleSubmit }>
      <div className="form-input-search__input">
        <InputText
          ref={ inputRef }
          value={ valueSearchContext }
          onChange={ handleInputChange }
          error={ errorInput }
          errorMsg={ 'Please enter Pokemon name or ID' }
          placeHolder="Pokemon Name or ID (151 is Maximum)"
        />
      </div>
      <div className="form-input-search__button">
        <Button
          type="submit"
        >Search</Button>
      </div>
    </form>
  )
}

export default FormSearch
