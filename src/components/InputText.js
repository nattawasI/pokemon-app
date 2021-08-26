import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'

const InputText = forwardRef((props, ref) => {
  // props
  const { value, onChange, placeHolder, error, errorMsg } = props

  // function
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <div className={`input-text${ error ? ' input-text--error': ''}`}>
      <input
        type="text"
        ref={ ref }
        placeholder={ placeHolder }
        value={ value }
        onChange={ handleChange }
      />
      {
        error && <span className="input-text__error-msg">{ errorMsg }</span>
      }
    </div>
  )
})

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
}

InputText.defaultProps = {
  value: '',
  onChange: () => {},
  placeHolder: '',
  error: false,
  errorMsg: '',
}

export default InputText
