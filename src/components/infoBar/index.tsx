'use client'
// import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
// import { useBilling } from '@/providers/billing-provider'

type Props = {
  // isAuthenticated: boolean
}

const InfoBar = ({}: Props) => {
  // const { credits, tier } = useBilling()

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center bg-muted rounded-full px-4">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent outline-none !focus:border-none !focus:outline-none !focus:ring-0"
        />
      </span>
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
      {/* <UserButton /> */}
    </div>
  )
}

export default InfoBar