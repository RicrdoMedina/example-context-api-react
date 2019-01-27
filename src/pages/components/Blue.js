import React from 'react'
import Green from '../components/Green'
import AppContext from '../containers/AppContext'
import './Blue.css'

const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)

export default Blue
