import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import 'non.geist'
import './index.css'
import Layout from './layouts/Layout'
import App from './App'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
