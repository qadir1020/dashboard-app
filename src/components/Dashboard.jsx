import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfilePieChart'
import RecentOrder from './RecentOrder'
import PopularProducts from './PopularProducts'

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart />
      <BuyerProfileChart />
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrder/>
        <PopularProducts/>
      </div>
    </div>
  )
}

export default Dashboard