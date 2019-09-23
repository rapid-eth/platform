import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import Heading from '../../atoms/Heading'
import Span from '../../atoms/Span'
const Label = styled(Span)
`
${
  variant({
    prop: 'variant',
    variants: {
      xs: {
        color: 'charcoal',
        fontSize: 1
      }
    }
  })
}
`

Label.defaultProps = {
  variant: 'xs'
}

const LabelCollection = ({ label, direction, variant, styled, children, ...props }) =>
direction === 'column'
? <Heading wordBreakAll as='h5' display='flex' flexDirection={'column' } {...styled} {...props}>
    <Label variant={variant} xs heavy>{label}</Label>
    <Span>{children}</Span>
  </Heading>
: <Heading alignCenter wordBreakAll as='h5' display='flex' flexDirection={'row' } {...styled} {...props}>
    <Label variant={variant} xs heavy>{label}</Label>
    <Span>{children}</Span>
  </Heading>

LabelCollection.defaultProps = {
  direction: 'column'
}
export default LabelCollection