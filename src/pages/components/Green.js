import React from 'react'
import AppContext from '../containers/AppContext'
import './Green.css'

const Green = () => (
  <div className="green">
      <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)


export default Green
