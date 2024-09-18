// Import necessary components and libraries
import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profilePicture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

type Props = {}

// Define the Settings component as an async function
const Settings = async (props: Props) => {
  // Get the current authenticated user
  const authUser = await currentUser()
  if (!authUser) return null

  // Fetch user data from the database
  const user = await db.user.findUnique({ where: { clerkId: authUser.id } })

  // Function to remove the user's profile image
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: '',
      },
    })
    return response
  }

  // Function to upload a new profile image
  const uploadProfileImage = async (image: string) => {
    'use server'
    const id = authUser.id
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    })

    return response
  }

  // Function to update user information (name)
  const updateUserInfo = async (name: string) => {
    'use server'

    const updateUser = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    })
    return updateUser
  }

  // Render the Settings page
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <h1 className="text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center border-b z-10">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        {/* User Profile section */}
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        {/* Profile Picture component */}
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ''}
          onUpload={uploadProfileImage}
        />
        {/* Profile Form component */}
        <ProfileForm
          user={user}
          onUpdate={updateUserInfo}
        />
      </div>
    </div>
  )
}

export default Settings