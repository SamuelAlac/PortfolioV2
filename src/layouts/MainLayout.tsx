import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from 'react-toastify';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Navbar/>
      <main className="grow bg-[#000319]">
      <ScrollToTop/>
        <Outlet/>
      </main>
      {/* <Footer/> */}
      <ToastContainer/>
    </div>
  )
}

export default MainLayout