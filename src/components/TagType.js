import React from 'react'
import PropTypes from 'prop-types'

const TagType = ({ children, type, textColor }) => {
  // function
  const classType = () => {
    if (type) {
      return ` tag-type--${ type }`
    }
  }

  const classTextColor = () => {
    if (textColor) {
      return ` tag-type--text-${ textColor }`
    }
  }

  return (
    <span className={`tag-type${ classType() }${ classTextColor() }`}>{ children }</span>
  )
}

TagType.propTypes = {
  type: PropTypes.string.isRequired,
  textColor: PropTypes.string
}

TagType.defaultProps = {
  textColor: 'black'
}

export default TagType
