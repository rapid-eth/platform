import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drizzle, generateStore } from 'drizzle'
import { DrizzleContext } from 'drizzle-react'
import options from './drizzle/config'
import styles from './styles.css'

const drizzleStore = generateStore(options)
const drizzle = new Drizzle(options, drizzleStore)

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props

    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <App text={text} />
      </DrizzleContext.Provider>
    )
  }
}

const App = props => {
  const { text } = props
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        console.log(drizzleContext)
        const { drizzleState, initialized } = drizzleContext
        console.log(drizzleState)
        return (
          <div>
            <div className={styles.test}>Sample Component: {text}</div>
            <h3>Drizzle Status: {initialized.toString()}</h3>
          </div>
        )
      }}
    </DrizzleContext.Consumer>
  )
}

App.propTypes = {
  text: PropTypes.string.isRequired
}
