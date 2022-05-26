import React from 'react'
import './App.css'
import { routes } from './routes/routes'
import { useRoutes } from 'react-router'
import NavBar from './components/Navbar'

const App = () => {
  const element = useRoutes(routes)
  return (
    <div>
      <NavBar />
      {element}
    </div>
  )
}

export default App
