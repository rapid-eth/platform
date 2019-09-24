import React from 'react';
import { Button, Form, Field } from '@horizin/design-system';

const QuestRinkebyFaucet = ({ box, threadName, ...props }) => {
  const onSubmit = async (values) => {
    const url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/verify-rinkeby-faucet-tx'
    try {

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values)
      });
      console.log(response)
      if (response.json) {
        const JSONResponse = await response.json();
        console.log(JSONResponse)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Form callback={onSubmit}>
      <Field
        name="transactionHash"
        placeholder="Transaction Hash"
      />
      <Field
        name="address"
        placeholder="Address"
      />
      <Button sm type="submit" variant='green'>Submit Evidence</Button>
    </Form>
  );
}

export default QuestRinkebyFaucet