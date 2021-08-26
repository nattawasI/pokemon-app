import React, { useState, useEffect } from 'react'
import { usePokemonStateContext } from '../contexts/PokemonContext'
import CardPokemon from './CardPokemon'
import Loading from '../components/Loading'
import ButtonBackList from './ButtonBackList'

const ListCardPokemon = () => {
  // context
  const { isLoadingContext, pokemonListContext, fetchStatusContext, fetchEventContext } = usePokemonStateContext()

  // state
  const [ showButtonList, setShowButtonList ] = useState(false)

  // useEffect
  useEffect(() => {
    if (!isLoadingContext && fetchEventContext === 'search') {
      setShowButtonList(true)
    } else {
      setShowButtonList(false)
    }
  }, [fetchEventContext, isLoadingContext])

  return (
    <div className="list-card">
      {
        isLoadingContext
        ? <Loading />
        : <ul className="list-card__list">
            {
              pokemonListContext.map(data => {
                return (
                  <li className="list-card__item" key={ data.id }>
                    <CardPokemon
                      data={ data }
                      className="list-card__card"
                    />
                  </li>
                )
              })
            }
          </ul>
      }
      {
        !isLoadingContext && fetchStatusContext.toString() === '404' && <div className="list-card__no-result">There is no result.</div>
      }
      {
        showButtonList
        &&  <div className="list-card__button">
              <ButtonBackList />
            </div>
      }
    </div>
  )
}

export default ListCardPokemon
