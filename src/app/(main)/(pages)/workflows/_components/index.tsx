import React from 'react'
import WorkflowCard from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'

type Props = {}

const index = async (props: Props) => {

  const workflows = await onGetWorkflows()

  return (
    // this is the section that contain the div that contains the workflows
        <section className=' w-full mt-2'>
         
          <div className='columns-1 md:columns-2 lg:columns-3 p-5 space-y-4 gap-5  '>
          {workflows?.length
           ? workflows.map((flow, index)=>(
            <div className='shadow-md break-inside-avoid' key={index}> 
            <WorkflowCard
              {...flow}
              />
              </div>
            )) : (
              <div className='mx-auto text-center w-full mt-20'>
                <p className=' text-lg text-muted-foreground'>No workflow found 🔍</p>
              </div>
            )
          }
          </div>
        </section>
  )
}

export default index
