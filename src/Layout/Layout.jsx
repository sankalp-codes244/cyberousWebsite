import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
const Layout = () => {
  return (
    <>
        {/* <Header/> */}
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default Layout;