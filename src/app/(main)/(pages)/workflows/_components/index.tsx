import React from 'react'
import WorkflowCard from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'

type Props = {}

const index = async (props: Props) => {

  const workflows = await onGetWorkflows()

  return (
    // this is the section that contain the div that contains the workflows
        <section className=' w-full mt-2'>
           {/*  this is the div that contains the workflows */}
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-5  p-5 gap-5 '> 
          {workflows?.length
           ? workflows.map((flow)=>(
            <div className='shadow-md '> 
            <WorkflowCard
              key={flow.id}
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
