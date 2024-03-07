import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './Layout/Layout.jsx'
import { Homepage } from './pages/Homepage/Homepage.jsx'
import NotFound from './pages/404Page/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage />} />
      <Route path='about' element={<div>About</div>} />
      <Route path='*' element={<NotFound/>} />
    </Route>,

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
