import React from 'react'
import { render } from 'react-dom'
//import Red from '../pages/containers/Red.js'
//import Grandmother from '../pages/containers/StoreFamily'

const ThemeContext = React.createContext('light')

class ThemeProvider extends React.Component {
  /* code */
}

const ThemeConsumer = ThemeContext.Consumer

const LanguageContext = React.createContext('en')

class LanguageProvider extends React.Component {
  /* code */

}

const LanguageConsumer = LanguageContext.Consumer

function AppProviders({children}) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}

function ThemeAndLanguageConsumer({children}) {
  return (
    <LanguageConsumer>
      {language => (
        <ThemeConsumer>
          {theme => children({language, theme})}
        </ThemeConsumer>
      )}
    </LanguageConsumer>
  )
}

class App extends React.Component {
  render() {
    return (
      <AppProviders>
        <ThemeAndLanguageConsumer>
          {({theme, language}) => <div>{theme} and {language}</div>}
        </ThemeAndLanguageConsumer>
      </AppProviders>
    )
  }
}

const app = document.getElementById('app')

render(
        <App/>,
        app
      )
