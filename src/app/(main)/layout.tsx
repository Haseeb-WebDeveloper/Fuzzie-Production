import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/topInfoNavBar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen  rounded-l-3xl">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
