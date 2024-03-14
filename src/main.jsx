import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import TrainingPage from './pages/TrainingPage/TrainingPage.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact/Contact.jsx'
// import About  from './pages/AboutUs/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Homepage/>} />
      <Route path='/training' element={<TrainingPage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      {/* <Route path='aboutpage' element={<About />} /> */}
    </Route>,
    // <Route path='*' element={<div>Error 404</div> } />
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
