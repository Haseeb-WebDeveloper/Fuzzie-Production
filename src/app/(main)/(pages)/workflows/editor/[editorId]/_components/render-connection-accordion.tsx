'use client'
import React from 'react'

import { AccordionContent } from '@/components/ui/accordion'

import { Connection } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { EditorState } from '@/providers/editor-provider'
import {useFuzzieStore} from '@/store'
import ConnectionCard from '@/app/(main)/(pages)/connections/_components/ConnectionCard'
import MultipleSelector from '@/components/ui/MultipleSelector'

// Sample data for frameworks (not used in this component)
const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

// Component to render connection accordion content
const RenderConnectionAccordion = ({
  connection,
  state,
}: {
  connection: Connection
  state: EditorState
}) => {
  // Destructure properties from the connection object
  const {
    title,
    image,
    description,
    connectionKey,
    accessTokenKey,
    alwaysTrue,
    slackSpecial,
  } = connection

  // Get node connection data from the connections provider
  const { nodeConnection  } = useNodeConnections()
  // Get Slack-related data and functions from the Fuzzie store
  const { slackChannels, selectedSlackChannels, setSelectedSlackChannels  } = useFuzzieStore()

  // Get connection data for the specific connection
  const connectionData = (nodeConnection as any)[connectionKey]

  // Determine if the connection is active
  const isConnected = 
  alwaysTrue || 
  (nodeConnection[connectionKey] &&
    accessTokenKey &&
    connectionData[accessTokenKey]
  )

  return (
    <AccordionContent key={title}>
    {/* Only render content if the selected node's title matches the connection title */}
    {state.editor.selectedNode.data.title === title && (
      <>
        {/* Render the connection card with connection details */}
        <ConnectionCard
          title={title}
          icon={image}
          description={description}
          type={title}
          connected={{ [title]: isConnected }}
        />
        {/* Render Slack channel selector if it's a Slack connection and is connected */}
        {slackSpecial && isConnected && (
          <div className="p-6">
            {slackChannels?.length ? (
              <>
                <div className="mb-4 ml-1">
                  Select the slack channels to send notification and messages:
                </div>
                {/* Render MultipleSelector component for selecting Slack channels */}
                <MultipleSelector
                  value={selectedSlackChannels}
                  onChange={setSelectedSlackChannels}
                  defaultOptions={slackChannels}
                  placeholder="Select channels"
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </>
            ) : (
              'No Slack channels found. Please add your Slack bot to your Slack channel'
            )}
          </div>
        )}
      </>
    )}
  </AccordionContent>
  )
}

export default RenderConnectionAccordion