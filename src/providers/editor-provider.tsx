/**
 * Editor Provider Component
 * 
 * This file defines the EditorProvider component and related types, context, and reducer
 * for managing the state of a workflow editor.
 * 
 * Key features:
 * - Defines types for Editor, EditorNode, and EditorState
 * - Implements a reducer for handling editor actions (REDO, UNDO, LOAD_DATA, SELECTED_ELEMENT)
 * - Creates and exports an EditorContext for use in child components
 * - Provides a custom hook (useEditor) for easy access to the editor state and dispatch function
 * 
 * Usage:
 * Wrap your main component with EditorProvider to provide editor state management
 * throughout your application.
 */

'use client'

import { EditorActions, EditorNodeType } from '@/lib/types'
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'

// Type definitions
export type EditorNode = EditorNodeType

export type Editor = {
  elements: EditorNode[]
  edges: {
    id: string
    source: string
    target: string
  }[]
  selectedNode: EditorNodeType
};

export type HistoryState = {
  history: Editor[]
  currentIndex: number
}

export type EditorState = {
  editor: Editor
  history: HistoryState
}

// Initial state definitions
const initialEditorState: EditorState['editor'] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: '',
      metadata: {},
      title: '',
      type: 'Trigger',
    },
    id: '',
    position: { x: 0, y: 0 },
    type: 'Trigger',
  },
  edges: [],
}

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
}

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
}

// Reducer function to handle editor actions
const editorReducer = (
  state: EditorState = initialState,
  action: EditorActions
): EditorState => {
  switch (action.type) {
    case 'REDO':
      // Implement redo functionality
      if (state.history.currentIndex < state.history.history.length - 1) {
        const nextIndex = state.history.currentIndex + 1
        const nextEditorState = { ...state.history.history[nextIndex] }
        const redoState = {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.history,
            currentIndex: nextIndex,
          },
        }
        return redoState
      }
      return state

    case 'UNDO':
      // Implement undo functionality
      if (state.history.currentIndex > 0) {
        const prevIndex = state.history.currentIndex - 1
        const prevEditorState = { ...state.history.history[prevIndex] }
        const undoState = {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.history,
            currentIndex: prevIndex,
          },
        }
        return undoState
      }
      return state

    case 'LOAD_DATA':
      // Load editor data
      return {
        ...state,
        editor: {
          ...state.editor,
          elements: action.payload.elements || initialEditorState.elements,
          edges: action.payload.edges,
        },
      }

    case 'SELECTED_ELEMENT':
      // Update selected element
      return {
        ...state,
        editor: {
          ...state.editor,
          selectedNode: action.payload.element,
        },
      }

    default:
      return state
  }
}

// Context definition
export type EditorContextData = {
  previewMode: boolean
  setPreviewMode: (previewMode: boolean) => void
}

export const EditorContext = createContext<{
  state: EditorState
  dispatch: Dispatch<EditorActions>
}>({
  state: initialState,
  dispatch: () => undefined,
})

// EditorProvider component
type EditorProps = {
  children: React.ReactNode
}

const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState)

  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  )
}

// Custom hook for using the EditorContext
export const useEditor = () => {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor Hook must be used within the editor Provider')
  }
  return context
}

export default EditorProvider