import React from 'react'
import AdminNavbar from '../../Components/Admin-Component/AdminNavbar'
import AdminSiderbar from '../../Components/Admin-Component/AdminSidebar'
import Footer from '../../Components/Footer/Footer'

export default function AdminUserPage() {
  return (
    <div>
        <AdminNavbar />
        <div className='flex'>
            <AdminSiderbar />
            <div className='p-3'>
                djfaksldj
            </div>
        </div>
        <Footer />
    </div>
  )
}
