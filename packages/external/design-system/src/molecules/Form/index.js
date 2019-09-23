import React from "react";
import useForm from "react-hook-form";

export default ({ callback, children, ...props}) => {
  const { handleSubmit, register, errors } = useForm();

  callback = callback ? callback : () => ({})
  const onSubmit = values => callback(values);
  return (
    !register ? null :
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        children && Array.isArray(children) && children.length > 0
        ? children.map( (child, index) => React.cloneElement(child, {register, errors}))
        : React.cloneElement(children, {register, errors})
      }
    </form>
  );
};