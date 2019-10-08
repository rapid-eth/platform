/* --- Global --- */
import React from 'react';
import Box3 from '3box/dist/3box'
import PropTypes from 'prop-types'
import {
  Box, Flex, Menu, Image, Button
} from '@horizin/design-system';

const Buffer = require('buffer/').Buffer

/* --- Local --- */

const Component = props => { 

  const uploadHandler = () => {
    const reader = new FileReader();
      reader.onloadend = async function() {
        // const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
        const buf = Buffer(reader.result) // Convert data into buffer
        const ipfs = await Box3.getIPFS()
        console.log(ipfs)
        ipfs.add(buf, (err, result) => { // Upload buffer to IPFS
          if(err) {
            console.error(err)
            return
          }
          let url = `https://ipfs.io/ipfs/${result[0].hash}`
          console.log(`Url --> ${url}`)

        })
      }

      reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
  }
 return(
  <>
        <fieldset>
          <legend>Upload photo</legend>
          <input type="file" name="photo" id="photo" />
          <button type="button" onClick={uploadHandler}>Upload</button>
        </fieldset>
  </>
)}


Component.defaultProps = {
  string: undefined
}

Component.propTypes = {
  string: PropTypes.string,
}

export default Component