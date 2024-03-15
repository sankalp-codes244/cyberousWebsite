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
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/404Page/NotFound.jsx'
import Blog from './pages/Blog/Blog.jsx'
// import About  from './pages/AboutUs/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='*' element={<NotFound/>} />
      <Route path='' element={<Homepage/>} />
      <Route path='/training' element={<TrainingPage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>,
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
