import React, { useMemo } from 'react'
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { EditorNodeType } from '@/lib/types';
import { useEditor } from '@/providers/editor-provider';
import EditorCanvasCardSingle from './editor-canvas-card-single';

type Props = {

}

const initialNodes: EditorNodeType[] = []
const initialEdges: {id: string, source: string, target: string}[] = []


function EditorCanvas({}: Props) {
  const { dispatch, state } = useEditor()
  
  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      AI: EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      'Google Drive': EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      'Custom webhook': EditorCanvasCardSingle,
      'Google Calendar': EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
    }),
    []
  )

  return (
    <div>EditorCanvas</div>
  )
}

export default EditorCanvas