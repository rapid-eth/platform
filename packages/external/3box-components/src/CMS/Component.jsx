/* --- Global Dependencies --- */
import React from 'react'

const Component  = ({ selection, pass, styled, key, forceRender, component, ...props }) => {
  console.log(styled, pass, selection, 'component stuff')
  const Component = component
  return (
    selection || forceRender
    ? Array.isArray(selection) 
      ? selection.map( item => (
        ! React.isValidElement(component)
          ? React.createElement(component, { ...item, ...pass, ...styled })
          : React.cloneElement(component, {...item, ...pass, ...styled })
        ))
      : props.spreadObject
      ? Object.values(selection).map( item => (
        ! React.isValidElement(component)
          ? React.createElement(component, { ...item, ...pass, ...styled })
          : React.cloneElement(component, {...item, ...pass, ...styled})
        ))
      : React.isValidElement(component,)
        ? React.createElement(component, { ...selection, ...pass, ...styled })
        : <Component {...selection} {...styled} {...pass}/>
    : null 
)}

Component.defaultProps = {
  component: () => null
}

export default Component