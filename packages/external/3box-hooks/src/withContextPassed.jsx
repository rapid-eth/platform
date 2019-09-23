import React from "react";
import Context from "./Context";

const withContextPassed = ({ children }) => (
  <Context.Consumer>
    {
    box => (
    <>
      {
        children && Array.isArray(children)
        ? children.map(child => React.cloneElement(child, { box }))
        : React.cloneElement(children, { box })
      }
    </>
    )
}
  </Context.Consumer>
);

export default withContextPassed;
