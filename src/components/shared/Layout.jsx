import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
    return (
        <div className='flex flex-row w-screen h-screen overflow-hidden bg-neutral-100'>
            <div className='bg-sky-200'>
                <SideBar/> 
            </div>
            <div className='p-4'>
                <div className='bg-teal-200'>header</div>
                <div>{<Outlet />}</div>
            </div>
            
        </div>
    )
}

export default Layout