'use client'

// Import necessary UI components and utilities
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from '@/lib/constant'
import { onDragStart } from '@/lib/editor-utils'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import React from 'react'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import RenderConnectionAccordion from './render-connection-accordion'

// Define props type for the component
type Props = {
    nodes: EditorNodeType[]
}

// EditorCanvasSidebar component
function EditorCanvasSidebar({ nodes }: Props) {
    // Get editor state from the EditorProvider
    const { state } = useEditor()
    // Get node connection data from the ConnectionsProvider
    const { nodeConnection } = useNodeConnections()

    return (
        <aside className='flex flex-col gap-2'>
            {/* Tabs for Action and Settings */}
            <Tabs
                defaultValue="action"
                className='h-screen overflow-y-scroll pb-24'
            >
                <TabsList className='bg-transparent'>
                    <TabsTrigger value='action'>Action</TabsTrigger>
                    <TabsTrigger value='settings'>Settings</TabsTrigger>
                </TabsList>
                <Separator />
                {/* Action Tab Content */}
                <TabsContent
                    value="action"
                    className="flex flex-col gap-4 p-4"
                >
                    {/* Render draggable cards for Trigger or Action types */}
                    {Object.entries(EditorCanvasDefaultCardTypes)
                        .filter(
                            ([_, cardType]) =>
                                (!nodes.length && cardType.type === 'Trigger') ||
                                (nodes.length && cardType.type === 'Action')
                        )
                        .map(([cardKey, cardValue]) => (
                            <Card
                                key={cardKey}
                                draggable
                                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                                onDragStart={(event) =>
                                    onDragStart(event, cardKey as EditorCanvasTypes)
                                }
                            >
                                <CardHeader className="flex flex-row items-center gap-4 p-4">
                                    <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                                    <CardTitle className="text-md">
                                        {cardKey}
                                        <CardDescription>{cardValue.description}</CardDescription>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                </TabsContent>
                {/* Settings Tab Content */}
                <TabsContent
                    value="settings"
                    className="-mt-6"
                >
                    {/* Display selected node title */}
                    <div className="px-2 py-4 text-center text-xl font-bold">
                        {state.editor.selectedNode.data.title}
                    </div>

                    {/* Accordion for Account and Action settings */}
                    <Accordion type="multiple">
                        {/* Account settings */}
                        <AccordionItem
                            value="Options"
                            className="border-y-[1px] px-2"
                        >
                            <AccordionTrigger className="!no-underline">
                                Account
                            </AccordionTrigger>
                            <AccordionContent>
                                {/* Render connection options for the selected node */}
                                {CONNECTIONS.map((connection) => (
                                    <RenderConnectionAccordion
                                        key={connection.title}
                                        state={state}
                                        connection={connection}
                                    />
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        {/* Action settings */}
                        <AccordionItem
                            value="Expected Output"
                            className="px-2"
                        >
                            <AccordionTrigger className="!no-underline">
                                Action
                            </AccordionTrigger>
                            {/* Placeholder for RenderOutputAccordion component */}
                            {/* <RenderOutputAccordion
                                state={state}
                                nodeConnection={nodeConnection}
                            /> */}
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
            </Tabs>
        </aside>
    )
}

export default EditorCanvasSidebar