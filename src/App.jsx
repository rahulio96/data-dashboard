import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import ComicPage from './components/comic-page/ComicPage'
import { useRoutes } from "react-router-dom"

function App() {

let element = useRoutes([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <ComicPage />,
  },
  ])
  
  return (
    <>
      {element}
    </>
  )
}

export default App
