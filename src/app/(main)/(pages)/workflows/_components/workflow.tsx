'use client'

import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { onFlowPublish } from '../_actions/workflow-connections'
import { toast } from 'sonner'

type Props = {
  name: string
  description: string
  id: string
  publish: boolean | null
}

// WorkflowCard component to display workflow information
const WorkflowCard = ({ description, id, name, publish }: Props) => {

  const onPublishFlow = async (event: any) => {
    const response = await onFlowPublish(
      id,
      event.target.ariaChecked === 'false'
    )
    if (response) toast.message(response)
  }

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        {/* Link to the workflow editor */}
        <Link href={`/workflows/editor/${id}`}>
          {/* Display icons for connected services */}
          <div className="flex flex-row gap-2">
            {/* Google Drive icon */}
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            {/* Notion icon */}
            <Image
              src="/notion.png"
              alt="Notion"
              height={30}
              width={30}
              className="object-contain"
            />
            {/* Discord icon */}
            <Image
              src="/discord.png"
              alt="Discord"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          {/* Display workflow name and description */}
          <div className="">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      {/* Toggle switch for workflow activation */}
      <div className='flex flex-col items-center p-4 gap-2'>
        <Label
          htmlFor='airplane-mode'
          className='text-muted-foreground'
        >
          { publish ? 'On' : 'Off' }
        </Label>
        <Switch
          id='airplane-mode'
          onClick={onPublishFlow}
          // WAP
          defaultChecked={true}
          onCheckedChange={() => {
            console.log('checked')
          }}
        />
      </div>
    </Card>
  )
}

export default WorkflowCard