import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import Header from "../components/Header"
export const Layout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
