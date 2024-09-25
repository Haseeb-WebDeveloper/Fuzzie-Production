import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col  relative rounded-tl-3xl'>
        <div className='sticky rounded-tl-3xl top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b z-10 '>
          <h1 className='text-2xl'>Workflows</h1>
          <WorkflowButton />
        </div>
        <div className='max-w-[1400px] mx-auto w-full'>
          <Workflows />
          {/* Rest of the page */}
        </div>
    </div>
  )
}

export default Page
