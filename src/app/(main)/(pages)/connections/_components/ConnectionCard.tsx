import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { ConnectionTypes } from '@/lib/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    type: ConnectionTypes;
    icon: string;
    title: ConnectionTypes;
    description: string;
    // callback: () => void;
    connected: {} & any;
}

function ConnectionCard({
    type,
    icon,
    title,
    description,
    // callback,
    connected,
}: Props) {
  return (
   <>
      <Card className='flex items-center justify-between w-full'>
        <CardHeader className="flex flex-col gap-4">
            <div className='flex flex-row gap-2'>
                <Image 
                src={icon} 
                alt={title} 
                width={30} 
                height={30} 
                className='object-contain'
                />
            </div>
            <div>
                <CardTitle className='text-lg'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
        <div className='flex flex-col gap-2 items-center p-4'>
            {connected[type] ? (
                <div className='border-bg-primary rounded-lg border-2 px-3 py-2 fond-bold text-white'>
                   Connected
                </div>
            )
            :(
                <Link 
                    href={
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

export default ConnectionCard