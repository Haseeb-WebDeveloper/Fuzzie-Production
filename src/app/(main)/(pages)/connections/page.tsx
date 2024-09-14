import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/ConnectionCard'

type Props = {
    searchParams: {
        [key: string]: string | undefined
    }
}

// WAP: Connnections to be completed

function Connections({}: Props) {
  return (
    <div className='flex flex-col gap-4 relative '>
        <h1 className='text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center border-b z-10'>Connections</h1>
        <div className='relative flex items-center gap-4'>
            <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                <h2>Connect all your apps directly from here. You may need to connect these apps regularly to refresh verification status.</h2>
                {CONNECTIONS.map((connection) => (
                    <ConnectionCard 
                    key={connection.title} 
                    type={connection.title}
                    icon={connection.image}
                    title={connection.title}
                    description={connection.description}
                    connected={connection}
                    />
                ))}
            </section>
        </div>
    </div>
  )
}

export default Connections