import React from 'react'
import { render } from 'react-dom'
//import Red from '../pages/containers/Red.js'
//import Grandmother from '../pages/containers/StoreFamily'

const ThemeContext = React.createContext('light')

class ThemeProvider extends React.Component {
  /* code */
  state = {theme: 'light'}
  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const ThemeConsumer = ThemeContext.Consumer

const LanguageContext = React.createContext('en')

class LanguageProvider extends React.Component {
  /* code */
  state = {lang: 'en'}
  setLanguage = lang => {
    this.setState({lang})
  }
  render() {
    return (
      <LanguageContext.Provider value={this.state.lang}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }

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
