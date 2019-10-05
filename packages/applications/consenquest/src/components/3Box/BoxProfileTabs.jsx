
/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Tabs, TabPanel } from 'react-context-tabs'
import { verify } from 'meshid-resolver'

import { IoIosNotifications, IoMdGlobe, IoIosCheckbox, IoLogoNoSmoking, IoMdContact, IoMdContacts, IoMdGitNetwork} from 'react-icons/io'

/* --- Local Dependencies --- */
import { Absolute, Box, Button, Flex, Heading, Span } from 'atoms'
import { Link, Tab } from 'molecules'


export default({ box, requests,hub,spaces, threads, requestConfirm, requestConfirmAll, requestReject, requestRejectAll }) =>
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