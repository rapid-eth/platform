import React from "react";
import useForm from "react-hook-form";
import { Form } from 'styled-system-html'
export default ({ callback, children, styled, ...props}) => {
  const { handleSubmit, register, errors } = useForm();

  callback = callback ? callback : () => ({})
  const onSubmit = values => callback(values);
  return (
    !register ? null :
    <Form onSubmit={handleSubmit(onSubmit)} {...props} {...styled}>
      {
        children && Array.isArray(children) && children.length > 0
        ? children.map( (child, index) => React.cloneElement(child, {register, errors}))
        : React.cloneElement(children, {register, errors})
      }
    </Form>
  );
};