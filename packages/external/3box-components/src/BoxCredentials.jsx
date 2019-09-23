/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Button, Span, Heading, Flex } from '@horizin/design-system'
import BoxLoginButton from './BoxLoginButton'
import BoxOpenSpace from './BoxOpenSpace'

/* --- React Component --- */
export default ({ box, space, children, ...props }) => 
!box.instance
? <Closed box={box} isLoggedIn={box.isLoggedIn} open={box.open} />
: box.spaces[space]
  ? <Open sm box={box} space={box.spaces[space]} />
  : <SpaceOpen box={box} space={space}/>
  class Open extends React.Component {
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
        <Flex column fullWidth width={1}>
          <Flex color='white' justifyEnd mb={15}>
            <Heading thin xs>Badges</Heading>
            <Heading xs mx={15}>Quests</Heading>
            <Heading thin xs>Authentiation</Heading>
          </Flex>
  
          {
            credentials && Array.isArray(credentials) &&
            <Flex gutter3 >
              {credentials.map( qst => <Quest removeItem={this.props.box.removeItem} {...qst}/>)}
            </Flex>
          }
  
  
        </Flex>
    )}
  }
  
  /* -------------- */

const Closed = ({ box, isLoggedIn, loading, open }) => {

  return (
    <BoxLoginButton variant='blue' box={box}/>
  )
}

const SpaceOpen = ({ box, space, ...props}) => {
  return (
      <BoxOpenSpace openSpace={box.openSpace} space={space}>
        <Button xs white>Open Space</Button>
      </BoxOpenSpace>
  )
}



const Quest = ({ name, summary, jwt, removeItem }) =>
<Flex center column card>
  <Heading color='charcoal' md>{name}</Heading>
  <Heading color='charcoal' xs normal level={6}>{summary}</Heading>
</Flex>
