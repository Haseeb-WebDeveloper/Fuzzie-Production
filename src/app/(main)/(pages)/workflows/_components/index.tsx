import React from 'react'
import WorkflowCard from './workflow'

type Props = {}

const index = (props: Props) => {
  return (
        <section className=''>
           <WorkflowCard 
            name='Workflow 1'
            description='Workflow 1 description'
            id='1'
            publish={true}
           />
        </section>
  )
}

export default index