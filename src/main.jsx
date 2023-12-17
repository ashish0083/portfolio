import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

 const theme = extendTheme({
  colors: {
    brand: {
      // 100: "#17517e",
      100: "#1F2833",
      101: "#f46f25",
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.100',
        color: 'white',
      }, 
      fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Monospace'`,
      },
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ChakraProvider>
)
