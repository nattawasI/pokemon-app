import React, { useState, useEffect } from 'react'
import { usePokemonStateContext, usePokemonActionContext } from '../contexts/PokemonContext'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight  } from 'react-icons/fi'

const Pagination = () => {
  // context
  const { maxPageContext, currentPageContext, isLoadingContext } = usePokemonStateContext()
  const { changeCurrentPageContext, changeCurrentUrlContext } = usePokemonActionContext()

  // state
  const [ disabledFirst, setDisabledFirst ] = useState(false)
  const [ disabledLast, setDisabledLast ] = useState(false)
  const [ disabledPrev, setDisabledPrev ] = useState(false)
  const [ disabledNext, setDisabledNext ] = useState(false)

  // function
  const handleClickFirst = () => {
    if (!isLoadingContext) {
      changeCurrentPageContext(1)
      changeCurrentUrlContext('first')
    }
  }

  const handleClickLast = () => {
    if (!isLoadingContext) {
      changeCurrentPageContext(maxPageContext)
      changeCurrentUrlContext('last')
    }
  }

  const handleClickPrev = () => {
    if (!isLoadingContext) {
      changeCurrentPageContext(currentPageContext - 1)
      changeCurrentUrlContext('prev')
    }
  }

  const handleClickNext = async () => {
    if (!isLoadingContext) {
      changeCurrentPageContext(currentPageContext + 1)
      changeCurrentUrlContext('next')
    }
  }

  // useEffect
  useEffect(() => {
    if (isLoadingContext) {
      setDisabledFirst(true)
      setDisabledLast(true)
      setDisabledPrev(true)
      setDisabledNext(true)
    } else if (currentPageContext === maxPageContext) {
      setDisabledFirst(false)
      setDisabledLast(true)
      setDisabledPrev(false)
      setDisabledNext(true)
    } else if (currentPageContext === 1) {
      setDisabledFirst(true)
      setDisabledLast(false)
      setDisabledPrev(true)
      setDisabledNext(false)
    } else {
      setDisabledFirst(false)
      setDisabledLast(false)
      setDisabledPrev(false)
      setDisabledNext(false)
    }
  }, [currentPageContext, maxPageContext, isLoadingContext])

  return (
    <div className="pagination">
      <div className="pagination__button">
        <button
          type="button"
          className={ `button-pagination${ disabledFirst ? ' disabled' : '' }` }
          onClick={ handleClickFirst }
          disabled={ disabledFirst }
        >
          <FiChevronsLeft className="button-pagination__icon" />
        </button>
        <button
          type="button"
          className={ `button-pagination${ disabledPrev ? ' disabled' : '' }` }
          onClick={ handleClickPrev }
          disabled={ disabledPrev }
        >
          <FiChevronLeft className="button-pagination__icon" />
        </button>
      </div>
      <span className="pagination__number">{ `${ currentPageContext } / ${ maxPageContext }` }</span>
      <div className="pagination__button">
        <button
          type="button"
          className={ `button-pagination${ disabledNext ? ' disabled' : '' }` }
          onClick={ handleClickNext }
          disabled={ disabledNext }
        >
          <FiChevronRight className="button-pagination__icon" />
        </button>
        <button
          type="button"
          className={ `button-pagination${ disabledLast ? ' disabled' : '' }` }
          onClick={ handleClickLast }
          disabled={ disabledLast }
        >
          <FiChevronsRight className="button-pagination__icon" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
