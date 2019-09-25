/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Button, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxThreadJoin = ({ box, variant, threadAddress, threadName, space, children, styled, ...props }) => {
  const [ loading, setLoading ] = useState(false)
  return (
    box.instance
    ? <Span
        onClick={()=>{
          box.joinThread({
          threadAddress: threadAddress,
          threadName: threadName,
          space: space
        });

        setLoading(true)
      }}
      >
        {
          loading
          ? <Button variant={variant}><Span>Loading Thread...</Span></Button>
          :children ? children :
          <Button
            variant={variant}
            {...styled}
            >
            {label}
          </Button>
        }
      </Span>
    : null
  )
}

BoxThreadJoin.defaultProps = {
  label: 'Join Thread',
  variant: 'green'
}

export default props =>
<BoxWrapper>
  <BoxThreadJoin {...props} />
</BoxWrapper>