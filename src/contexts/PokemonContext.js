import React, {useState, createContext, useContext, useEffect} from 'react'
// import axios from 'axios'

const PokemonStateContext = createContext()
const PokemonActionContext = createContext()

export const usePokemonStateContext = () => {
  return useContext(PokemonStateContext)
}

export const usePokemonActionContext = () => {
  return useContext(PokemonActionContext)
}

const PokemonProvider = ({ children }) => {
  // variable
  const maxPokemonContext = 151
  const limitPerPageContext = 12
  const maxPageContext = Math.ceil(maxPokemonContext / limitPerPageContext)
  const urlApi = 'https://pokeapi.co/api/v2/pokemon'

  // state
  const [currentPageContext, setCurrentPageContext] = useState(1)
  const [valueSearchContext, setValueSearchContext] = useState('')
  const [pokemonListContext, setPokemonListContext] = useState([])
  const [fetchStatusContext, setFetchStatusContext] = useState('')
  const [fetchEventContext, setFetchEventContext] = useState('')
  const [isLoadingContext, setIsLoadingContext] = useState(true)
  const [prevUrlContext, setPrevUrlContext] = useState(null)
  const [currentUrlContext, setCurrentUrlContext] = useState(`${ urlApi }?limit=${ limitPerPageContext }&offset=0`)
  const [nextUrlContext, setNextUrlContext] = useState(null)


  const changeValueSearchContext = (value) => {
    setValueSearchContext(value)
  }

  const changeCurrentPageContext = (count) => {
    setCurrentPageContext(count)
  }

  const getPokemonObject = (datas) => {
    const objectArray = []
    for (const data of datas) {
      const objectData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types
      }
      objectArray.push(objectData)
    }
    return objectArray
  }

  const searchPokemonContext = async () => {
    const target = valueSearchContext.toLowerCase()

    /* using fetch
    ---------------------------------------- */
    setIsLoadingContext(true)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ target }`)
    if (response.ok) {
      const data = await response.json()
      setIsLoadingContext(false)
      setFetchStatusContext(response.status.toString())
      setFetchEventContext('search')
      setPokemonListContext(getPokemonObject([data]))
    } else {
      setIsLoadingContext(false)
      setFetchStatusContext('404')
      setFetchEventContext('search')
      setPokemonListContext([])
    }
  }

  const getPokemonList = (list) => {
    if (list.length) {
      return list.filter(item => {
        return item.id <= maxPokemonContext
      })
    }
  }

  const getPokemonListContext = async () => {
    setIsLoadingContext(true)
    setValueSearchContext('')
    const response = await fetch(currentUrlContext)
    if (response.ok) {
      const data = await response.json()
      setPrevUrlContext(data.previous)
      setNextUrlContext(data.next)
      const promises = []

      for (const item of data.results) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${ item.name }`))
      }

      const responses = await Promise.all(promises)
      const dataResponse = responses.map(response => response.json())
      const results = await Promise.all(dataResponse)
      const listAllPokemon = getPokemonObject(results)
      setFetchStatusContext(response.status.toString())
      setIsLoadingContext(false)
      setFetchEventContext('fetchList')
      setPokemonListContext(getPokemonList(listAllPokemon))
    }
  }

  const changeCurrentUrlContext = (target) => {
    if (target === 'first') {
      setCurrentUrlContext(`${ urlApi }?limit=${ limitPerPageContext }&offset=0`)
    } else if (target === 'last') {
      const offset = (maxPageContext - 1) * limitPerPageContext
      setCurrentUrlContext(`${ urlApi }?limit=${ limitPerPageContext }&offset=${ offset }`)
    } else if (target === 'prev') {
      setCurrentUrlContext(prevUrlContext)
    } else if (target === 'next') {
      setCurrentUrlContext(nextUrlContext)
    }
  }

  // useEffect
  useEffect(() => { // fetch data when active filter has changed
    getPokemonListContext()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrlContext])

  // Store
  const pokemonStateStore = {
    maxPokemonContext,
    limitPerPageContext,
    maxPageContext,
    currentPageContext,
    valueSearchContext,
    pokemonListContext,
    fetchStatusContext,
    fetchEventContext,
    isLoadingContext,
    prevUrlContext,
    nextUrlContext,
  }

  const pokemonActionStore = {
    changeCurrentPageContext,
    changeValueSearchContext,
    searchPokemonContext,
    getPokemonListContext,
    changeCurrentUrlContext,
  }

  return (
    <>
      <PokemonStateContext.Provider value={ pokemonStateStore }>
        <PokemonActionContext.Provider value={ pokemonActionStore }>
          { children }
        </PokemonActionContext.Provider>
      </PokemonStateContext.Provider>
    </>
  )
}

export default PokemonProvider