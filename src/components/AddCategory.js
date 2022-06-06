import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategorias } ) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit hecho')
    if (inputValue.trim().length > 2) {
      setCategorias( cats => [inputValue, ...cats])
      setInputValue('')
    }
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue}
          onChange={ handleInputChange } 
        />
      </form>
    </div>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}