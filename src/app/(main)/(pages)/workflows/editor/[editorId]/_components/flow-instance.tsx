'use client'
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { onCreateNodesEdges, onFlowPublish } from '../_actions/workflow-connections'
import { toast } from 'sonner'

type Props = {
  children: React.ReactNode
  edges: any[]
  nodes: any[]
}

// FlowInstance component manages the workflow automation and publishing
const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname()
  // State to store the types of nodes in the flow
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()

  // Function to save the current flow configuration
  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split('/').pop()!, // Extract the editorId from the URL
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    )

    if (flow) toast.message(flow.message)
  }, [nodeConnection])

  // Function to publish the workflow
  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) toast.message(response)
  }, [])

  // Function to analyze the flow and update the isFlow state
  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }

  // Effect to run onAutomateFlow whenever edges change
  useEffect(() => {
    onAutomateFlow()
  }, [edges])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        {/* Save button */}
        <Button
          onClick={onFlowAutomation}
          disabled={isFlow.length < 1}
        >
          Save
        </Button>
        {/* Publish button */}
        <Button
          disabled={isFlow.length < 1}
          onClick={onPublishWorkflow}
        >
          Publish
        </Button>
      </div>
      {children}
    </div>
  )
}

export default FlowInstance