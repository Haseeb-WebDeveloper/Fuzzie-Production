import React from 'react'
import WorkflowCard from './workflow'

// Define the props type for the component (currently empty)
type Props = {}

// Define the main component
const index = (props: Props) => {
  return (
    // Render a section element
    <section className=''>
      {/* Render a WorkflowCard component with specific props */}
      <WorkflowCard 
        name='Workflow 1'
        description='Workflow 1 description'
        id='1'
        publish={true}
      />
    </section>
  )
}

// Export the component as the default export
export default index
