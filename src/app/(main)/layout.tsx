import InfoBar from '@/components/topInfoNavBar'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = {children: React.ReactNode}

function Layout({children}: Props) {
  return (
    <div className='flex overflow-hidden h-screen w-full'>
        <Sidebar/>
        <div className='w-full'>
          <InfoBar />
          {children}
        </div>
    </div>
  )
}

export default Layout