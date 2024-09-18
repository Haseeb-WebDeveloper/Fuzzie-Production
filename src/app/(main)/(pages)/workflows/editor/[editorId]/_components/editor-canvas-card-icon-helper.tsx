'use client'
import React from 'react'
// Import necessary icons from lucide-react library
import {
  Calendar,
  CircuitBoard,
  Database,
  GitBranch,
  HardDrive,
  Mail,
  MousePointerClickIcon,
  Plus,
  Slack,
  Timer,
  Webhook,
  Zap,
} from 'lucide-react'
// Import EditorCanvasTypes from types file
import { EditorCanvasTypes } from '@/lib/types'

// Define props type for the component
type Props = { type: EditorCanvasTypes }

// EditorCanvasIconHelper component to render icons based on the type prop
const EditorCanvasIconHelper = ({ type }: Props) => {
  // Use switch statement to determine which icon to render based on the type
  switch (type) {
    case 'Email':
      return (
        <Mail
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Condition':
      return (
        <GitBranch
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'AI':
      return (
        <CircuitBoard
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Slack':
      return (
        <Slack
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Google Drive':
      return (
        <HardDrive
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Notion':
      return (
        <Database
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Custom Webhook':
      return (
        <Webhook
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Google Calendar':
      return (
        <Calendar
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Trigger':
      return (
        <MousePointerClickIcon
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Action':
      return (
        <Zap
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Wait':
      return (
        <Timer
          className="flex-shrink-0"
          size={30}
        />
      )
    // Default case if no matching type is found
    default:
      return (
        <Zap
          className="flex-shrink-0"
          size={30}
        />
      )
  }
}

// Export the component as default
export default EditorCanvasIconHelper