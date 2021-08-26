import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, variant, disabled, onClick }) => {
  // function
  const handleClick = () => {
    onClick()
  }

  const setVariantStyle = () => {
    return variant ? ` button--${ variant }` : ''
  }

  return (
    <button
      type={ type }
      className={`button${ setVariantStyle() }${ disabled? ' button--disabled': '' }`}
      onClick={ handleClick }
      disabled={ disabled }
    >
      <span className="button__text">{ children }</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  variant: '',
  disabled: false,
  onClick: () => {}
}

export default Button
