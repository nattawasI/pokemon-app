import React from 'react'
import PropTypes from 'prop-types'
import TagType from './TagType'

const CardPokemon = ({ data, className }) => {
  return (
    <div className={`card${ className ? ' ' + className : '' }`}>
      <div className="card__number">#{ data.id }</div>
      <figure className="card__fig">
        <img src={ data.image } alt="" />
      </figure>
      <h2 className="card__name">{ data.name }</h2>
      <div className="card__types">
        {
          data.types.map(item => {
            return (
              <div className="card__tag" key={ item.type.name }>
                <TagType
                  type={ item.type.name }
                >
                  { item.type.name }
                </TagType>
              </div>
              )
          })
        }
      </div>
    </div>
  )
}

CardPokemon.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
}

CardPokemon.defaultProps = {
  data: {},
  PropTypes: '',
}

export default CardPokemon
