// Import necessary dependencies and components
import React, { useMemo } from 'react'
import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import { Position, useNodeId } from 'reactflow'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import CustomHandle from './CustomHandle'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'

type Props = {}

// Component for rendering a single card in the editor canvas
const EditorCanvasCardSingle = ({data}: { data: EditorCanvasCardType }) => {
    // Access editor state and dispatch function
    const { dispatch, state } = useEditor()
    // Get the current node ID
    const nodeId = useNodeId()
    // Memoize the logo component to prevent unnecessary re-renders
    const logo = useMemo(()=>{
        return <EditorCanvasIconHelper type={data.type} />
    }, [data])
    
    return (
        <>
            {/* Render input handle for all types except 'Trigger' and 'Google Drive' */}
            {data.type !== 'Trigger' && data.type !== 'Google Drive' && (
                <CustomHandle
                    type= "target"
                    position={Position.Top}
                    style= {{ zIndex: 100 }}
                />
            )}
            <Card
                onClick={(e) => {
                    // Find the current node in the editor state
                    const val = state.editor.elements.find((node) => node.id === nodeId)
                    if(val){
                        // Dispatch action to select the current element
                        dispatch({
                            type: 'SELECTED_ELEMENT',
                            payload: {
                                element: val
                            }
                        })
                    }
                }}  
                className='relative max-w-[400px] dark:border-muted-foreground/70'  
            >
                <CardHeader className='flex flex-row items-center gap-4'>
                    <div className=''>{logo}</div>
                    <div>
                        <CardTitle className='text-md'>{data.title}</CardTitle>
                        <CardDescription>
                            <p className='text-xs text-muted-foreground/50'>
                                <b className='text-muted-foreground/80'>ID:</b> {nodeId}
                            </p>
                            <p>{data.description}</p>
                        </CardDescription>
                    </div>
                </CardHeader>
                {/* Display the node type as a badge */}
                <Badge
                    variant='secondary'
                    className='absolute top-2 right-2'
                >
                    {data.type}
                </Badge>
                {/* Render a colored dot to indicate node status (randomly generated for demo) */}
                <div 
                className={clsx('absolute left-3 top-4 h-2 w-2 rounded-full', {
                    'bg-green-500': Math.random() < 0.6,
                    'bg-orange-500': Math.random() >= 0.6 && Math.random() < 0.8,
                    'bg-red-500': Math.random() >= 0.8,
                })}></div>
            </Card>
            {/* Render output handle for all node types */}
            <CustomHandle
                type= "source"
                position={Position.Bottom}
                id='a' 
                style= {{ zIndex: 100 }}
            />
        </>
  )
}

export default EditorCanvasCardSingle