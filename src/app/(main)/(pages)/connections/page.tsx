// Import necessary dependencies and components
import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/ConnectionCard'
import { currentUser } from '@clerk/nextjs'
import { onDiscordConnect } from './_actions/discord-connection'
import { onNotionConnect } from './_actions/notion-connection'
import { onSlackConnect } from './_actions/slack-connection'
import { getUserData } from './_actions/get-user'

// Define props type for the Connections component
type Props = {
    searchParams?: { [key: string]: string | undefined }
  }

// Connections component to display all available app connections
const Connections = async (props: Props) => {

    const {
        webhook_id,
        webhook_name,
        webhook_url,
        guild_id,
        guild_name,
        channel_id,
        access_token,
        workspace_name,
        workspace_icon,
        workspace_id,
        database_id,
        app_id,
        authed_user_id,
        authed_user_token,
        slack_access_token,
        bot_user_id,
        team_id,
        team_name,
      } = props.searchParams ?? {
        webhook_id: '',
        webhook_name: '',
        webhook_url: '',
        guild_id: '',
        guild_name: '',
        channel_id: '',
        access_token: '',
        workspace_name: '',
        workspace_icon: '',
        workspace_id: '',
        database_id: '',
        app_id: '',
        authed_user_id: '',
        authed_user_token: '',
        slack_access_token: '',
        bot_user_id: '',
        team_id: '',
        team_name: '',
      }
    
      const user = await currentUser()
      if (!user) return null
    
      const onUserConnections = async () => {
        console.log(database_id)
        await onDiscordConnect(
          channel_id!,
          webhook_id!,
          webhook_name!,
          webhook_url!,
          user.id,
          guild_name!,
          guild_id!
        )
        await onNotionConnect(
          access_token!,
          workspace_id!,
          workspace_icon!,
          workspace_name!,
          database_id!,
          user.id
        )
    
        await onSlackConnect(
          app_id!,
          authed_user_id!,
          authed_user_token!,
          slack_access_token!,
          bot_user_id!,
          team_id!,
          team_name!,
          user.id
        )
    
        const connections: any = {}
    
        const user_info = await getUserData(user.id)
    
        //get user info with all connections
        user_info?.connections.map((connection) => {
          connections[connection.type] = true
          return (connections[connection.type] = true)
        })
    
        // Google Drive connection will always be true
        // as it is given access during the login process
        return { ...connections, 'Google Drive': true }
      }
    
      const connections = await onUserConnections()
    

  return (
    <div className='flex flex-col gap-4 relative '>
        {/* Sticky header for the Connections page */}
        <h1 className='text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center border-b z-10'>Connections</h1>
        <div className='relative flex items-center gap-4'>
            <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                {/* Informational text for users */}
                <h2>Connect all your apps directly from here. You may need to connect these apps regularly to refresh verification status.</h2>
                {/* Map through all available connections and render ConnectionCard for each */}
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-4'>
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
                    </div>
            </section>
        </div>
    </div>
  )
}

// Export the Connections component as default
export default Connections