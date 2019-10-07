/* --- Global Dependencies --- */
import React from 'react'

export default ({ selection, component}) =>
selection 
  ? Array.isArray(selection) 
    ? selection.map( item => (
      ! React.isValidElement(component)
        ? React.createElement(component, {...item})
        : React.cloneElement(component, {...item})
      ))
    :  React.isValidElement(component)
      ? React.createElement(component, {...selection})
      : React.cloneElement(component, {...selection})
  : null
