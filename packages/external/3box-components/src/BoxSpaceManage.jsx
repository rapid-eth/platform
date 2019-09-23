/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Button, Span, Heading, Flex } from '@horizin/design-system'
import BoxLoginButton from './BoxLoginButton'
import BoxOpenSpace from './BoxOpenSpace'

/* --- React Component --- */
export default ({ box, space, children, ...props }) => 
!box.isLoggedIn
? <IsNotLoggedIn box={box} isLoggedIn={box.isLoggedIn} open={box.open} />
: box.spaces[space]
  ? <SpaceIsOpen sm box={box} space={box.spaces[space]} />
  : <SpaceOpen box={box} space={space}/>

const IsNotLoggedIn = ({ box, isLoggedIn, loading, open }) => {

  return (
    <BoxLoginButton variant='blue' box={box}/>
  )
}

const SpaceOpen = ({ box, space, children, ...props}) => {
  return (
      <BoxOpenSpace openSpace={box.openSpace} space={space}>
        
        {
          children
          ? children
          : <Button xs white>Open {space} Space</Button>
        }
      </BoxOpenSpace>
  )
}


class SpaceIsOpen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      credentials: undefined
    }
  }
  // Mounted
  componentDidMount()
  {
    this.props.box.get({
      keys: 'all',
      access: 'public',
      space: 'meshhub',
      all: true
    })

    if(idx(this.props.space, _=>_.data.credentials)) {
      this.setState({
        credentials: idx(this.props, _=>_.space.data.credentials)
      })
    }
  }

  componentDidUpdate(prevProps) {
    if(idx(this.props.space, _=>_.data.credentials) && !this.state.credentials) {
      this.setState({
        credentials: idx(this.props, _=>_.space.data.credentials)
      })
    }
    if(idx(this.props.space, _=>_.data.credentials) !== idx(prevProps, _=>_.space.data.credentials)) {
      this.setState({
        credentials: idx(this.props, _=>_.space.data.credentials)
      })
    }
  }
  
  render() {
    const { credentials } = this.state
  return (
      null
  )}
}
