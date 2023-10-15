import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
