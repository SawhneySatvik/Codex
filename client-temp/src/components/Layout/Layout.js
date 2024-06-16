import React from 'react'
import Footer from './Footer'
import SideBar from '../SideBar'
import Header from './Header'

import toast, { Toaster } from 'react-hot-toast';
// import { Sidebar } from 'react-pro-sidebar';

const Layout = ({children}) => {
  
  return (
    <div>
      {/* <Header/> */}
      {/* <SideBar/> */}
      <main>{children}</main>
      <Toaster/>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
