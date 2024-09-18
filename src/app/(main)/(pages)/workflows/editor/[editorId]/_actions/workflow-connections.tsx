'use server'

import { db } from '@/lib/db'

// Function to create or update nodes and edges of a workflow
export const onCreateNodesEdges = async (
  flowId: string,
  nodes: string,
  edges: string,
  flowPath: string
) => {
  // Update the workflow in the database
  const flow = await db.workflows.update({
    where: {
      id: flowId,
    },
    data: {
      nodes,
      edges,
      flowPath: flowPath,
    },
  })

  // Return a success message if the flow was updated
  if (flow) return { message: 'flow saved' }
}

// Function to publish or unpublish a workflow
export const onFlowPublish = async (workflowId: string, state: boolean) => {
  // Log the publish state for debugging
  console.log(state)

  // Update the publish state of the workflow in the database
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  })

  // Return appropriate message based on the publish state
  if (published.publish) return 'Workflow published'
  return 'Workflow unpublished'
}