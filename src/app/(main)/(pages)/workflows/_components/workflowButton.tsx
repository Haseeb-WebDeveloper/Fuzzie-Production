'use client'

// Import necessary components and hooks
import Workflowform from '@/components/forms/Workflowform'
import CustomModal from '@/components/global/CustomModal'
import { Button } from '@/components/ui/button'
import { WorkflowFormSchema } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { PlusIcon } from 'lucide-react'
import React from 'react'

// Define props type (currently empty)
type Props = {}

// WorkflowButton component
function workflowButton({}: Props) {
    // Use the modal hook to control the modal state
    const { setOpen, setClose } = useModal()
    
    // Function to handle creating a new workflow
    const handleNewWorkflow = () => {
        // Open a modal with a form to create a new workflow
        setOpen(
            <CustomModal
                title='Create a Workflow'
                subheading='Workflows are powerful tools that help you automate your work.'
            >
                <Workflowform
                    title='Create a Workflow'
                />
            </CustomModal>
        )
    }

  // Render a button that opens the new workflow modal when clicked
  return (
    <div>
        <Button
            size={'icon'}
            onClick={handleNewWorkflow}
        >
            <PlusIcon />
        </Button>
    </div>
  )
}

export default workflowButton