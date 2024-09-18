import React from 'react'
import WorkflowButton from './_components/workflowButton'
import Workflow from './_components'

// Define an empty Props type for the Workflows component
type Props = {}

// Workflows component to display a list of workflows
function Workflows({}: Props) {
  return (
    <>
    {/* Main container with flex column layout */}
    <div className='flex flex-col relative'>
        {/* Sticky header with backdrop blur effect */}
        <div className='sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b z-10'>
          <h1 className='text-2xl'>Workflows</h1>
          {/* Button to create a new workflow */}
          <WorkflowButton />
        </div>
        {/* Grid layout for displaying workflow components */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 p-5 gap-5'>
          {/* Multiple instances of the Workflow component */}
          {/* TODO: Replace with dynamic rendering based on actual workflow data */}
          <Workflow />
          <Workflow />
          <Workflow />
          <Workflow />
          <Workflow />
        </div>
    </div>
    </>
  )
}

export default Workflows