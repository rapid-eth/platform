import { useContext, useEffect } from "react";
import Context from "../Context";

export default ({
  children,
  ...props
}) => {
  const state = useContext(Context)

  /**
   * @function TemplateLoader
   * @description Load global tabs templates.
   */
  useEffect( () => {
    state.dispatch({
      type: 'registerTabsFamily',
      id: props.id
    })
  }, [state.dispatch])

  return children
};

