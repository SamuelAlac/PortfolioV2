import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/Home/HomePage"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { index: true, element: <HomePage/> },
    ]
  }
])

function App() {
  useEffect(() =>{
    Aos.init({ duration: 1000, once: false,})
  }, []);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
