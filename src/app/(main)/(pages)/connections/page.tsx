// Import necessary dependencies and components
import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/ConnectionCard'

// Define props type for the Connections component
type Props = {
    searchParams: {
        [key: string]: string | undefined
    }
}

// TODO: Complete the Connections functionality

// Connections component to display all available app connections
function Connections({}: Props) {
  return (
    <div className='flex flex-col gap-4 relative '>
        {/* Sticky header for the Connections page */}
        <h1 className='text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center border-b z-10'>Connections</h1>
        <div className='relative flex items-center gap-4'>
            <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                {/* Informational text for users */}
                <h2>Connect all your apps directly from here. You may need to connect these apps regularly to refresh verification status.</h2>
                {/* Map through all available connections and render ConnectionCard for each */}
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

// Export the Connections component as default
export default Connections