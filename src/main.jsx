import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Root from './MainLayout/Root'
import AddCoffee from './Components/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/addcoffee",
        element:<AddCoffee/>    
      },
      {
        path:"/update/:id",
        element:<UpdateCoffee/>,
        loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
