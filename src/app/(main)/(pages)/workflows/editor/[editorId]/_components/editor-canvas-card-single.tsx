import React, { useMemo } from 'react'
import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import { useNodeId } from '@xyflow/react'
import EditorCardIconHelper from './editor-card-icon-helper'

type Props = {
  data: EditorCanvasCardType
}

const EditorCanvasCardSingle = ({data}: Props) => {
    const { dispatch, state } = useEditor()
    const nodeID = useNodeId()
    const logo = useMemo(()=>{
        // return <EditorCardIconHelper type{data.type} />
    }, [data])
    
    return (
    <div>EditorCanvasCardSingle</div>
  )
}

export default EditorCanvasCardSingle