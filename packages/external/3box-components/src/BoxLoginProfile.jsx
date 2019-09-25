/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Button, Box, Span, Image, Flex } from '@horizin/design-system'
import { Modal } from '@horizin/design-system'
import { GenerateImage } from './utilities'
import BoxProfile from './BoxProfile'

/* --- React Component --- */
export default ({ box, children, styled, ...props }) =>
  <Flex ac zIndex={10} {...styled}>
    <Flex center column>
      <Span xs pointer bg='blue' color='white' borderRadius='5px 0 0 5px' px={10} py='5px' mr={'-10px'} onClick={box.login}>
        {
          !box.instance
            ? <ButtonLogin box={box} />
            : <BoxProfileName box={box} />
        }
      </Span>
    </Flex>
    <Box width='unset'>
      <Modal content={<LoginPopover box={box} />}>
        {
          idx(box.profile, _ => _.image) &&
            box.instance
            ? <Image variant='avatar' width={40} opacity={1} src={GenerateImage(idx(box.profile, _ => _.image))} />
            : <Image variant='avatar' width={40} opacity={0.7} src={GenerateImage(idx(box.profile, _ => _.image))} />
        }
      </Modal>
    </Box>
  </Flex>

const LoginPopover = ({ box, styled, ...props }) =>
  <Box>
    {/* <BoxProfile box={box} /> */}
  </Box>


const ButtonLogin = ({ box }) =>
box.isLoggingIn
  ? <Span pl={10} pr={10}>Loading...</Span>
  : <Span onClick={box.open} px={[10]}>3ID Login</Span>

const BoxProfileName = ({ box, styled, ...props }) =>
box.profile && box.isLoggedIn
  ? <Flex alignCenter>
    <Span px={10}>{box.profile.name}</Span>
  </Flex>
  : <Span onClick={box.open} px={[10]}>3ID Login</Span>

