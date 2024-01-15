import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'


const DashboardStatsGrid = () => {
    return (
        <div className='flex w-full'>
            <BoxWrapper>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light text-gray-500">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold text-gray-700">$54232</strong>
                        <span className="pl-2 text-sm text-green-500">+343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                    <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light text-gray-500">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold text-gray-700">$3423</strong>
                        <span className="pl-2 text-sm text-green-500">-343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light text-gray-500">Total Customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold text-gray-700">12313</strong>
                        <span className="pl-2 text-sm text-red-500">-30</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light text-gray-500">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold text-gray-700">16432</strong>
                        <span className="pl-2 text-sm text-red-500">-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return (
        <div className='flex items-center flex-1 p-4 m-2 bg-white border border-gray-200 rounded-sm'>
            {children}
        </div>

    )
}

export default DashboardStatsGrid