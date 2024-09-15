'use client'

import Workflowform from '@/components/forms/Workflowform'
import CustomModal from '@/components/global/CustomModal'
import { Button } from '@/components/ui/button'
import { WorkflowFormSchema } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { PlusIcon } from 'lucide-react'
import React from 'react'

type Props = {}

function workflowButton({}: Props) {
    const { setOpen, setClose } = useModal()
    
    const handleNewWorkflow = () => {
        setOpen(
            <CustomModal
                title='Create a Workflow'
                subheading='Workflow are a powerfull that help you automate your work.'
            >
                <Workflowform
                    title='Create a Workflow'
                />
            </CustomModal>
        )
    }
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