/* --- Global --- */
import React, { useEffect, useState } from 'react';
import { utils } from 'ethers'
import PropTypes from 'prop-types'
import {
  Box, Flex, Menu, Image, Button, Heading, Span, Link
} from '@horizin/design-system';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
/* --- Local --- */

const MILLION = 1000000

const Component = props => {
  const [pledge, setPledge] = useState(0)
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    var url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/ticker';
    window.fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.json) res.json().then(msg => {
          setPercent(MILLION / 100000)
          setPledge(utils.commify(msg.pledgeCount + 200000))
        });
      })
      .catch(err => {
        console.log(err);
      });
  })
  return (
    <>
      <Box height={320} width={320} mb={3}>
        <Progress
          width={320}
          height={320}
          percent={percent}
          theme={{
            success: {
              symbol: <Image maxWidth={150} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />,
              color: 'rgb(223, 105, 180)',
              trailColor: 'rgba(255,255,255, 0.4)',
            },
            active: {
              symbol: <Image maxWidth={150} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />,
              color: 'rgb(223, 105, 180)',
              trailColor: 'pink',
            },
            default: {
              symbol: <Image maxWidth={150} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />,
              color: 'rgb(223, 105, 180)',
              trailColor: 'pink',
            }
          }}

          type="circle" percent={percent} status="success" />
      </Box>
      <Heading xl center thin><Span fontWeight={700}>{pledge}+ </Span> Active Developers</Heading>
      {
        window.ethereum && window.ethereum.selectedAddress &&
        <>
<<<<<<< HEAD
  <a target='_blank' href={`https://onemilliondevs.com/#/connect/${window.ethereum.selectedAddress}`}>
    <Span xs p={3}> {`/connect/${window.ethereum.selectedAddress}`} </Span>
  </a>
    <Span xxs tag='white'>Share Your Referral Code</Span>
=======
          <Link to={`onemilliondevelopers.com/connect/${window.ethereum.selectedAddress}`}>
            <Span xs bg='white' py={2}> {`onemilliondevelopers.com/connect/${window.ethereum.selectedAddress}`} </Span>
          </Link>
          <Span xxs tag='white'>Share Your Referral Code</Span>
>>>>>>> 1d81097a6ace835557ec818cb0d60e8679d01953
        </>
      }
    </>
  )
}


Component.defaultProps = {
  string: undefined
}

Component.propTypes = {
  string: PropTypes.string,
}

export default Component