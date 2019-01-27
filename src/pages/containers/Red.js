import React, { Component } from 'react'
import AppContext from './AppContext'
import AppProvider from './AppContextProvider'
import Blue from '../components/Blue'
import './Red.css'
 
class Red extends Component {
  render() {
    return  <AppProvider> 
              <div className="red">
                <AppContext.Consumer>
                  {(context) => context.number}
                </AppContext.Consumer>
                <Blue />
              </div>
            </AppProvider>
  }
}

export default Red
