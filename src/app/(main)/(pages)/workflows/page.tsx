import React from 'react'
import WorkflowButton from './_components/workflowButton'

type Props = {}

function Workflows({}: Props) {
  return (
    <div className='flex flex-col gap-4 relative '>
        <h1 className='text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b z-10'>Workflows</h1>
        <WorkflowButton />
    </div>
  )
}

export default Workflows