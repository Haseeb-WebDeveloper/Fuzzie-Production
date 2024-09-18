'use client'
// Import necessary dependencies and components
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
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

// Define the props for the ProfileForm component
type Props = {
  user: any
  onUpdate?: any
}

// ProfileForm component definition
const ProfileForm = ({ user, onUpdate }: Props) => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false)

  // Initialize the form using react-hook-form with zod schema validation
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

  // Handle form submission
  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true)
    await onUpdate(values.name)
    setIsLoading(false)
  }

  // Reset form values when user prop changes
  useEffect(() => {
    form.reset({ name: user.name, email: user.email })
  }, [user])

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 max-w-md"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {/* Name input field */}
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
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
        {/* Email input field (disabled) */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit button with loading state */}
        <Button
          type="submit"
          className="self-start bg-[#210840] hover:bg-[#2F006B] text-white "
        >
          {isLoading ? (
            <>
              <div className="flex items-center gap-2">
                Saving
                <Loader2 className=" h-4 w-4 animate-spin" />
              </div>
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm