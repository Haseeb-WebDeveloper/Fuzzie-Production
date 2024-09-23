// Import necessary dependencies and components
import { WorkflowFormSchema } from '@/lib/types'  // validation schema
import { zodResolver } from '@hookform/resolvers/zod'  // zod resolver for form validation
import { useRouter } from 'next/navigation'  // next/navigation for router
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { onCreateWorkflow } from '@/app/(main)/(pages)/workflows/_actions/workflow-connections'
import { useModal } from '@/providers/modal-provider'

// Define props for the Workflowform component
type Props = {
  title?: string
  subTitle?: string
}

// Workflowform component definition
const Workflowform = ({ subTitle, title }: Props) => {
  // Get the setClose function from the modal provider
  const { setClose } = useModal()
  
  // Initialize the form using react-hook-form with zod schema validation
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  // Get the loading state from the form
  const isLoading = form.formState.isLoading
  // Initialize the router
  const router = useRouter()

  // Handle form submission
  const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
     const workflow = await onCreateWorkflow(values.name, values.description)
     if (workflow) {
       toast.message(workflow.message)
       router.refresh()
     }
     setClose()
  }

  return (
    // Card component to wrap the form
    <Card className="w-full max-w-[650px] border-none">
      {/* Conditional rendering of the card header */}
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        {/* Form component */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            {/* Name input field */}
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Description input field */}
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit button with loading state */}
            <Button
              className="mt-4 "
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Workflowform