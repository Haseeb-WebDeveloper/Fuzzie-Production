// Import necessary components and types
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { ConnectionTypes } from '@/lib/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

// Define the props for the ConnectionCard component
type Props = {
    type: ConnectionTypes;
    icon: string;
    title: ConnectionTypes;
    description: string;
    // callback: () => void; // Commented out, possibly for future use
    connected: {} & any; // Object to track connection status
}

// ConnectionCard component definition
function ConnectionCard({
    type,
    icon,
    title,
    description,
    // callback, // Commented out, possibly for future use
    connected,
}: Props) {
  return (
   <>
      <Card className='flex items-center justify-between w-full'>
        <CardHeader className="flex flex-col gap-4">
            {/* Icon container */}
            <div className='flex flex-row gap-2'>
                <Image 
                src={icon} 
                alt={title} 
                width={30} 
                height={30} 
                className='object-contain'
                />
            </div>
            {/* Title and description */}
            <div>
                <CardTitle className='text-lg'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        {/* Connection status or connect button */}
        <div className='flex flex-col gap-2 items-center p-4'>
            {connected[type] ? (
                // Display 'Connected' if the service is connected
                <div className='border-bg-primary rounded-lg border-2 px-3 py-2 fond-bold text-white'>
                   Connected
                </div>
            )
            :(
                // Display 'Connect' button if not connected
                <Link 
                    href={
                        // Determine the correct redirect URL based on the service
                        title === 'Discord' 
                        ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                        : title === 'Notion' 
                        ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                        : title === 'Slack' 
                        ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                        : '#'
                    }
                    className='bg-primary p-2 rounded-lg font-bold text-primary-foreground'
                >
                    Connect
                </Link>
            )}
        </div>
      </Card>
   </>
  )
}

// Export the ConnectionCard component
export default ConnectionCard