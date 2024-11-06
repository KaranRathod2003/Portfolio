import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import  Contact from './pages/Contact.jsx'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
