import { ThemeProvider } from 'styled-components'
import './App.css'
import { Trasactions } from './pages/transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
       <Trasactions />

    </ThemeProvider>
   
  )
}

