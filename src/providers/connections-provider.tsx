'use client'
import { createContext, useContext, useState } from 'react'

// Define the shape of the ConnectionProviderProps
export type ConnectionProviderProps = {
  // Discord node properties
  discordNode: {
    webhookURL: string
    content: string
    webhookName: string
    guildName: string
  }
  setDiscordNode: React.Dispatch<React.SetStateAction<any>>
  
  // Google node properties
  googleNode: {}[]
  setGoogleNode: React.Dispatch<React.SetStateAction<any>>
  
  // Notion node properties
  notionNode: {
    accessToken: string
    databaseId: string
    workspaceName: string
    content: ''
  }
  setNotionNode: React.Dispatch<React.SetStateAction<any>>
  
  // Slack node properties
  slackNode: {
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    content: string
  }
  setSlackNode: React.Dispatch<React.SetStateAction<any>>
  
  // Workflow template properties
  workflowTemplate: {
    discord?: string
    notion?: string
    slack?: string
  }
  setWorkFlowTemplate: React.Dispatch<
    React.SetStateAction<{
      discord?: string
      notion?: string
      slack?: string
    }>
  >
  
  // Loading state
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

// Props type for the ConnectionsProvider component
type ConnectionWithChildProps = {
  children: React.ReactNode
}

// Initial values for the ConnectionProviderProps
const InitialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: '',
    content: '',
    webhookName: '',
    guildName: '',
  },
  googleNode: [],
  notionNode: {
    accessToken: '',
    databaseId: '',
    workspaceName: '',
    content: '',
  },
  workflowTemplate: {
    discord: '',
    notion: '',
    slack: '',
  },
  slackNode: {
    appId: '',
    authedUserId: '',
    authedUserToken: '',
    slackAccessToken: '',
    botUserId: '',
    teamId: '',
    teamName: '',
    content: '',
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setIsLoading: () => undefined,
  setWorkFlowTemplate: () => undefined,
}

// Create a context for the connections
const ConnectionsContext = createContext(InitialValues)
const { Provider } = ConnectionsContext

// ConnectionsProvider component to wrap the application and provide connection functionality
export const ConnectionsProvider = ({ children }: ConnectionWithChildProps) => {
  // State hooks for each node type and other properties
  const [discordNode, setDiscordNode] = useState(InitialValues.discordNode)
  const [googleNode, setGoogleNode] = useState(InitialValues.googleNode)
  const [notionNode, setNotionNode] = useState(InitialValues.notionNode)
  const [slackNode, setSlackNode] = useState(InitialValues.slackNode)
  const [isLoading, setIsLoading] = useState(InitialValues.isLoading)
  const [workflowTemplate, setWorkFlowTemplate] = useState(
    InitialValues.workflowTemplate
  )

  // Combine all values into a single object
  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    isLoading,
    setIsLoading,
    workflowTemplate,
    setWorkFlowTemplate,
  }

  // Provide the values to all children components
  return <Provider value={values}>{children}</Provider>
}

// Custom hook to use the connections context
export const useNodeConnections = () => {
  const nodeConnection = useContext(ConnectionsContext)
  return { nodeConnection }
}