
/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Tabs, TabPanel } from 'react-context-tabs'
import { verify } from 'meshid-resolver'

import { IoIosNotifications, IoMdGlobe, IoIosCheckbox, IoLogoNoSmoking, IoMdContact, IoMdContacts, IoMdGitNetwork} from 'react-icons/io'
import { MdNotInterested, MdStoreMallDirectory, MdUpdate } from 'react-icons/md'
import { FiCheckCircle } from 'react-icons/fi'

/* --- Local Dependencies --- */
import { BoxContext } from 'context/Providers/BoxProvider'
import { Absolute, Box, Button, Flex, Heading, Span } from 'atoms'
import { Link, Tab } from 'molecules'
import { Panel, Popover, Modal, Branch } from 'components'

<Flex ac zIndex={10}>
                  <Box>
                    <Avatar src={loginLogo} width={40} borderRadius={9999} />
                  </Box>
                <Flex center column zIndex={5}>
                  <Span
                  xs pointer zIndex={0} bg='#eb9400' color='white' borderRadius='0 5px px 0' px={10} py='5px' ml={'-10px'}
                  >
                    {
                      isLoading
                      ? <Span pl={10} pr={10}>Loading...</Span>
                      : <Span pl={10} pr={10}>Login</Span>
                    }
                    
                  </Span>
                </Flex>
                </Flex>

/* --- React Component --- */
export default ({ children, styled, ...props }) => {
  return (
    <BoxContext.Consumer>
      { box => (
          box.requests
          ? <>
              <Popover content={<Open
                box={box}
                requests={box.requests}
                spaces={box.spaces}
                threads={box.threads}
                requestConfirm={box.requestConfirm}
                requestConfirmAll={box.requestConfirmAll}
                requestReject={box.requestReject}
                requestRejectAll={box.requestRejectAll}
              />}>
                <Box {...styled}>
                  <Absolute top right mt={-10} mr={-10}>
                    <Flex circle center column bg='blue' p='5px' width={20} height={20}>
                      <Span xs>{box.requests.length}</Span>
                    </Flex>
                  </Absolute>
                  <Span md color='white' ><IoIosNotifications /></Span>
                </Box>
              </Popover>
            </>
          : null
      )}
    </BoxContext.Consumer>
  )
}


const Open = ({ box, requests,hub,spaces, threads, requestConfirm, requestConfirmAll, requestReject, requestRejectAll }) =>
<Tabs defaultTabId='3box'>
<Box card p={0} maxWidth={380} width={380} mr={30}>
  <Box rounded gradient='gray' pt={10}>
    <Flex evenly>
      <Tab tabId={'3box'}  button activeColor='blue'>
        <Span sm normal pointer>BOX</Span>
      </Tab>
      <Tab tabId={'spaces'} button activeColor='blue'>
        <Span sm normal pointer>SPACES</Span>
      </Tab>
      <Tab tabId={'threads'}  button activeColor='blue'>
        <Span sm normal pointer>THREADS</Span>
      </Tab>
    </Flex>
  </Box>
  <Flex column p={20} maxHeight={300} height='100%'>
      <PerfectScrollbar>
        
        {/*
         Requests
        */}
        <TabPanel tabId={'3box'}>
            {
              requests && Array.isArray(requests) && requests.length > 0
              ? requests.filter(rq => rq.status !== 'rejected').map( (request, index) => 
                <RequestPreview
                  {...request}
                  box={box}
                  index={index}
                  requestConfirm={requestConfirm}
                  requestReject={requestReject}
                />)
              : <Flex center column p={15}>
                  <Span color='blue' lg><IoMdGlobe/></Span>
                  <Span sm thin>No active requests... Refreshing!</Span>
                  <Span pointer xs thin mt={15}>Scan Network</Span>
                </Flex>
            }
        </TabPanel>
        
        {/*
         Spaces
        */}
        <TabPanel tabId={'spaces'}>
              {
                spaces && Array.isArray(Object.keys(spaces)) && Object.keys(spaces).length > 0
                ? Object.keys(spaces).map( space => <SpacePreview name={space} {...spaces[space]} />)
                : <Flex center column p={15}>
                    <Span color='blue' lg><IoMdGitNetwork/></Span>
                    <Span sm thin>Blank Canvas</Span>
                    <Span pointer xs thin mt={15}>Create Space</Span>
                  </Flex>
              }
        </TabPanel>

        {/*
         threads
        */}
        <TabPanel tabId={'threads'}>
              {
                threads && Array.isArray(threads) && threads.length > 0
                ? threads.map( request => <RequestPreview {...request} />)
                : <Flex center column p={15}>
                    <Span color='blue' lg><IoMdGlobe/></Span>
                    <Span sm thin>No active requests... Refreshing!</Span>
                    <Span pointer xs thin mt={15}>Scan Network</Span>
                  </Flex>
              }
        </TabPanel>
    </PerfectScrollbar>
  </Flex>
  <Flex card gradient='gray' evenly my={10}>
    <Button tag xs white onClick={requestConfirmAll} >Approve All</Button>
    <Button xs white onClick={requestRejectAll}>Reject All</Button>
  </Flex>
</Box>
</Tabs>

const SpacePreview = ({ name, styled, data, instance, ...props}) =>
<Flex alignCenter between mb={10}>
  {console.log(props, 'space props')}
  <Heading sm thin slim>{name}</Heading>
  <Panel content={<SpaceStoragePreview data={data}/>}>
    <Button xs white>Space Storage</Button>
  </Panel>
</Flex>

const SpaceStoragePreview = ({ data, styled, ...props}) =>
<Box>
  {console.log(props, 'space storage props')}
  <Heading>Storage Space</Heading>
  {
    console.log(data) 
  }
  {
    data && Array.isArray(Object.keys(data)) && Object.keys(data).length > 0
    ? <Branch data={data} />
    : <Flex center column p={15}>
        <Span color='blue' lg><IoMdGitNetwork/></Span>
        <Span sm thin>Blank Canvas</Span>
        <Span pointer xs thin mt={15}>Create Space</Span>
      </Flex>
  }
</Box>

const RequestPreview = ({ index, box, type, payload, requestConfirm, requestReject }) => {
  let { access, space, from, keys, append } = payload

  return (
    <Flex column wordBreak borderBottom='2px solid' borderColor='gray' my={10} py={'10px'} >
      <Flex alignCenter between>
        {/* <IoMdContacts />  */}
        <Heading sm thin slim><strong>created:</strong> {from || 'self'}</Heading>
        <Span xs>4 Seconds Ago</Span>
      </Flex>
      <Flex my={'8px'}>
        {
          space && 
          <Flex alignCenter>
            <MdStoreMallDirectory fontSize='.9em' />
            <Heading xs thin slim ml='5px' mr={10}> <strong>space:</strong> {space}</Heading>
          </Flex>
        }
        {
          type &&
          <Flex alignCenter>
            <MdUpdate fontSize='.9em'/>
            <Heading xs thin slim ml={'5px'} ><strong>type:</strong> {type}</Heading>
          </Flex>
        }
      </Flex>
      <Flex alignCenter between my={'5px'} mt={15}>
        <Flex alignCenter>
          <Span pointer heavy tag green xs onClick={()=>requestConfirm(index)}>
            <Flex alignCenter>
              <FiCheckCircle fontSize='1.5em' />
              <Span xs ml={10}>Confirm</Span>
            </Flex>
          </Span>
          <Span pointer heavy tag red xs ml={10} onClick={()=>requestReject(index)} >
            <Flex alignCenter>
              <MdNotInterested fontSize='1.5em' />
              <Span xs ml={10}>Reject</Span>
            </Flex>
          </Span>
        </Flex>
        <Modal
          content={<RequestDetails type={type} payload={payload} box={box} />}
        >
          <Button xs white ><Span xs>Details</Span></Button>
        </Modal>
      </Flex>
      
    </Flex>
  )
}


const RequestDetails = ({ type, payload, box, styled, ...props}) =>
<Box>
  {RequestTypes(type, payload, box)}
</Box>

const RequestTypes = (type, payload, box) => ({
  set: <RequestSetType {...payload} {...box}/>,
  credential: <CredentialPopover {...payload}/> 
}[type || 'default'])


const RequestSetType = ({ keys, inputs, options, requestConfirm, index, space, spaces, openSpace }) =>{
  const [ loading, setLoading ] = useState();
  let isSpaceOpen = spaces && spaces[space]

  return (
    <Box>
      <Box p={20}>
        <Heading md normal level={4}>Access: <Span thin>Public</Span></Heading>
          {space
          ? <Flex alignCenter>
              <Heading md normal slim level={4}>Space: <Span thin>{space}</Span></Heading>
              {
                isSpaceOpen
                ? <Span color='green' ml={15}>Open</Span>
                : loading
                  ? <Span xs pointer color='red' ml={15}>Loading Space</Span>
                  : <Span xs pointer color='red' ml={15} onClick={()=>{openSpace(space); setLoading(true)} } >(Requires Open Confirmation - Click to Open)</Span>
              }
            </Flex>
          : null
          }
        <Flex column wordBreak card gradient='white' p={30} mt={20} >
          {
            keys && Array.isArray(keys) && keys.map( (v,i) => <>
              <Heading sm heavy mt={15}>{v}<br/>
                <Span thin>
                  { 
                    typeof inputs[i] === 'string'
                    ? inputs[i]
                    : <InputValue {...inputs[i]}/>
                  }
                </Span>
              </Heading>
            </>)
          }
        </Flex>
      </Box>
      <Flex gradient='gray' p={20} evenly mt={[25]}>
        <Button sm white palette='green' onClick={()=>requestConfirm(index)}>Confirm Request</Button>
        <Button sm palette='red' onClick={()=>requestConfirm(index)}>Reject Request</Button>
      </Flex>
    </Box>
)}

const InputValue = ({claims}) =>
<Flex column>
  { 
    Object.keys(claims)
    .map( clm => 
        typeof claims[clm] === 'object'
        ? <InputValue {...claims[clm]}/>
        : <Span xs normal>{clm}: {claims[clm]}</Span>
      )
  }
</Flex>

const CredentialPopover = ({ credential, ...props}) => {
  const [ proof, setProof ] = useState(undefined)
  verify(credential)
  .then(credential => setProof(credential))
  return (
    <Flex column>
      <Heading>Credential</Heading>
      {
        proof &&
        <CredentialObject {...proof}/>
      }
    </Flex>
  )
}


const CredentialObject = ({ doc, issuer, jwt, payload, signer }) =>
<Flex column>
  <Heading sm thin><strong>Issuer:</strong> {issuer}</Heading>
  <Heading sm thin><strong>Subject:</strong> {payload.sub}</Heading>
  <Heading sm thin><strong>Issued:</strong> {payload.iat}</Heading>
  <Box card p={0} my={20}>
    <Box gradient='gray' p={20}>
      <Heading xs normal>Claim(s)</Heading>
    </Box>
    <Box p={20}>
      <CredentialClaim claims={idx(payload, _=>_.claim)}/>
    </Box>
  </Box>
  <Heading xs thin>Signer Algorithm: {signer.type}</Heading>

  <Flex between mt={20}>
    <Button xs palette='green'>Share Credential</Button>
    <Button xs>Backup Credential</Button>
    <Button xs palette='orange'>Publish Credential</Button>
  </Flex>
</Flex>


const CredentialClaim = ({claims}) =>
<Flex column>
  { 
    Object.keys(claims)
    .map( clm => 
        typeof claims[clm] === 'object'
        ? <CredentialClaim {...claims[clm]}/>
        : <Span xs normal>{clm}: {claims[clm]}</Span>
      )
    
  }
</Flex>