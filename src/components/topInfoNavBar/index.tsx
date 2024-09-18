'use client'

// Import necessary components and icons
import React from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'

// Uncomment if billing functionality is needed
// import { useBilling } from '@/providers/billing-provider'

// Define props type for InfoBar component
type Props = {
  // Uncomment if authentication status is needed
  // isAuthenticated: boolean
}

// InfoBar component definition
const InfoBar = ({}: Props) => {
  // Uncomment if billing information is needed
  // const { credits, tier } = useBilling()

  return (
    // Main container for the info bar
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      {/* Search input field */}
      <span className="flex items-center bg-muted rounded-full px-4">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent outline-none !focus:border-none !focus:outline-none !focus:ring-0"
        />
      </span>

      {/* Support button with tooltip */}
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Guide button with tooltip */}
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* User profile button */}
      <UserButton />
    </div>
  )
}

export default InfoBar