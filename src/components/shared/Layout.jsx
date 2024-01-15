import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import { Header } from '../Header'

function Layout() {
    return (
        <div className='flex flex-row w-screen h-screen overflow-hidden bg-neutral-100'>
            <SideBar />
            <div className='flex-1'>
                <Header />
                <div className='p-4'>
                    {<Outlet />}
                </div>
            </div>

        </div>
    )
}

export default Layout