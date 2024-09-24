import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col  relative rounded-l-3xl '>
        <div className=' sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center rounded-l-3xl justify-between border-b z-10'>
          <h1 className='text-2xl'>Workflows</h1>
          <WorkflowButton />
        </div>
        <div className='  '>
          <Workflows />
        </div>
    </div>
  )
}

export default Page
