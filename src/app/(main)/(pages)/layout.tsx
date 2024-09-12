import React from 'react'

type Props = {children: React.ReactNode}

function Layout({children}: Props) {
  return (
    <div className='border-l-[1px] border-t-[1px] border-muted-foreground/20 rounded-tl-xl rounded-bl-xl pb-20 h-screen  overflow-scroll font-twk'>
        {children}
    </div>
  )
}

export default Layout