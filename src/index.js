import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// For Check client - run on which mode.
let server_host_url = null
if (process.env.REACT_APP_NODE === 'development') {
  server_host_url = `${process.env.REACT_APP_DEVELOPMENT_SERVER_HOST}${process.env.REACT_APP_DEVELOPMENT_SERVER_PORT}`
  console.log(
    `You Server in Development mode, connected with- ${server_host_url}`
  )
} else if (process.env.REACT_APP_NODE === 'production') {
  server_host_url = `${process.env.REACT_APP_PRODUCTION_SERVER_HOST}${process.env.REACT_APP_PRODUCTION_SERVER_PORT}`
  console.log(
    `You Server in Production mode, connected with- ${server_host_url}`
  )
}

const client = new ApolloClient({
  uri: `${server_host_url}`,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
