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
// import { toast } from 'sonner'
// import { onFlowPublish } from '../_actions/workflow-connections'

// Define the props for the WorkflowCard component
type Props = {
  name: string
  description: string
  id: string
  publish: boolean | null
}

// WorkflowCard component to display workflow information
const WorkflowCard = ({ description, id, name, publish }: Props) => {
  
  // TODO: Implement WIRUP DB challenge

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
          ON
        </Label>
        <Switch
          id='airplane-mode'
          // TODO: Implement onPublishFlow functionality
          // onClick={onPublishFlow}
          // defaultChecked={props.publish}
          // onCheckedChange={() => {
          //   console.log('checked')
          // }}
        />
      </div>
    </Card>
  )
}

export default WorkflowCard