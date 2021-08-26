import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ children, tag, size }) => {
  const TagName = tag;

  return (
    <TagName className={ `heading heading--${ size }`}>{ children }</TagName>
  )
}

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
}

Heading.defaultProps = {
  tag: 'h1',
  size: 'xxxl' // xxxl, xxl, xl, lg, md, base
}

export default Heading
