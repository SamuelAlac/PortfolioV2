import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/Home/HomePage"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import { useMobile } from "./hooks/useMobile";

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
  const isMobile = useMobile();
  useEffect(() =>{
    Aos.init({ duration: isMobile ? 600 : 1000, once: true })
  }, []);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
