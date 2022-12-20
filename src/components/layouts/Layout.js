import React from 'react'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div>
        {/* <!-- Layout wrapper --> */}
<div class="layout-wrapper layout-content-navbar">

  {/* <!-- Layout container --> */}
  <div class="layout-container">

    {/* <!-- Menu --> */}
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
      Menu (Navigation)
    </aside>
    {/* <!--/ Menu --> */}

    {/* <!-- Layout page --> */}
    <div class="layout-page">

      {/* <!-- Navbar --> */}
     <Navbar/>
      {/* <!--/ Navbar --> */}

      {/* <!-- Content wrapper --> */}
      <div class="content-wrapper">

        {/* <!-- Content --> */}
        <div class="container-xxl flex-grow-1 container-p-y">
         
        </div>
        {/* <!--/ Content --> */}

        {/* <!-- Footer --> */}
        <footer class="content-footer footer bg-footer-theme">
        
        </footer>
        {/* <!--/ Footer --> */}

        {/* <!-- Content area backdrop --> */}
        <div class="content-backdrop fade"></div>
      </div>
      {/* <!--/ Content wrapper --> */}

    </div>
    {/* <!--/ Layout page --> */}

  </div>
  {/* <!--/ Layout container --> */}

  {/* <!-- Overlay --> */}
  <div class="layout-overlay layout-menu-toggle"></div>

  {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
  <div class="drag-target"></div>
</div>
{/* <!--/ Layout wrapper --> */}
    </div>
  )
}

export default Layout