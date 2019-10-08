/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Form, Field, Link, Span, Toast, Box, Flex, Button, Heading, Image, Paragraph } from '@horizin/design-system'

/**
 * @function ResourceItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const ResourceItem = ({ box,  ...props}) => { 
  const [ certificate, setCertificate ] = useState()
  /* -------------------- */
  /* Actions
  /* -------------------- */
  /**
   * @function SubmitHandler
   * @description Connect to Quest Backend System
   */
  const submitHandler = (values) => {
    console.log(props, 'submit handler')
    const url = props.lambo
    window.fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "questId": props.questId,
        "address": window.ethereum.selectedAddress
      })
    })
    .then( res => {
      if(res.json) {
        res.json()
        .then (json => {
          setCertificate(json)
        })
      }
    })
  }

  /* -------------------- */
  /* Effects
  /* -------------------- */

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */


  /* -------------------- */
  /* Resource Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
  certificate
  ? (
    <Flex card center column>
      <Heading lg heavy>Quest Complete</Heading>
      <Heading md thin>Congratulations on completing a quest!</Heading>
      <Flex card column wordBreakAll>
        <Span xxs my={2}><strong>ID: </strong>{certificate.certificateId}</Span>
        <Span xxs><strong>Certifiate:</strong> {certificate.signature}</Span>
      </Flex>
      <Flex between width='100%' my={3}>
        <Toast
          content={<RedeemCertificateForm signature={certificate.signature} />}
        >
          <Button variant='green' >Redeem Certifiate</Button>
        </Toast>
        <Toast label='Certificate Saved'>
          <Button >Save Certificate</Button>
        </Toast>
      </Flex>
    </Flex>
  )
  : (
    <Box card>
      <Heading>Complete Quest</Heading>

      <Form callback={submitHandler}>
        <Field
            name="address"
            minHeight={60}
            defaultValue={window.ethereum.selectedAddress}
            placeholder="Address"
          />
          <Button type='submit' variant='green' width='100%'>Complete Quest</Button> 
      </Form>
    </Box>
  )
)}

ResourceItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
}

ResourceItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

const RedeemCertificateForm = ({ styled, ...props}) => { 
 return(
  <Box maxWidth={300}>
    <Heading>Redeem Certificate</Heading>
    <Paragraph sm>
      Exchange a token certificate for tokens.
    </Paragraph>
    <Form>
      <Field
          name="signature"
          minHeight={60}
          defaultValue={props.signature}
          placeholder="Certificate"
        />
        <Button type='submit' variant='green' width='100%'>Redeem</Button> 
    </Form>
  </Box>
)
}

export default ResourceItem