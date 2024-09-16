import { useEditor } from '@/providers/editor-provider'
import React, { CSSProperties } from 'react'
import { Handle, HandleProps, useStore } from 'reactflow'

// Extend HandleProps to include an optional style property
type Props = HandleProps & { style?: CSSProperties }

// Selector function for useStore hook (currently commented out)
const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
})

const CustomHandle = (props: Props) => {
  // Get the current state from the editor context
  const { state } = useEditor()
  // const { nodeInternals, edges } = useStore(selector)

  return (
    <Handle
      {...props}
      isValidConnection={(e) => {
        // Count the number of edges that have this handle's node as a source
        const sourcesFromHandleInState = state.editor.edges.filter(
          (edge) => edge.source === e.source
        ).length
        // Find the source node in the editor's elements
        const sourceNode = state.editor.elements.find(
          (node) => node.id === e.source
        )
        // Count the number of edges that have this handle's node as a target
        const targetFromHandleInState = state.editor.edges.filter(
          (edge) => edge.target === e.target
        ).length

        // Validation rules:
        // 1. If the target already has a connection, return false
        if (targetFromHandleInState === 1) return false
        // 2. If the source node is a 'Condition' type, always allow the connection
        if (sourceNode?.type === 'Condition') return true
        // 3. If the source has no outgoing connections yet, allow the connection
        if (sourcesFromHandleInState < 1) return true
        // 4. Otherwise, don't allow the connection
        return false
      }}
      // Custom styling for the handle
      className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800"
    />
  )
}

export default CustomHandle