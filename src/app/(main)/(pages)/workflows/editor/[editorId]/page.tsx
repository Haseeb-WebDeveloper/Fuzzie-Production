// Import necessary components and providers
import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

// Define an empty Props type for the Page component
type Props = {}

// Page component for the workflow editor
const Page = (props: Props) => {
  return (
    // Wrapper div with full height
    <div className="h-full ">
      {/* EditorProvider wraps the entire editor functionality */}
      <EditorProvider>
        {/* ConnectionsProvider manages connection-related state and logic */}
        <ConnectionsProvider>
          {/* EditorCanvas is the main component for the workflow editor interface */}
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider> 
    </div>
  )
}

// Export the Page component as the default export
export default Page