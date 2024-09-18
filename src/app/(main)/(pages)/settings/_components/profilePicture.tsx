'use client'
import React from 'react'
import UploadCareButton from './uploadCareButton'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

// Define the props for the ProfilePicture component
type Props = {
  userImage: string | null  // The URL of the user's profile image
  onDelete?: any  // Function to handle image deletion
  onUpload: any  // Function to handle image upload
}

// ProfilePicture component for displaying and managing user profile picture
const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  // Function to remove the profile image
  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()  // Refresh the page to reflect the changes
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          // If user has an image, display it with a remove button
          <>
            <div className="relative h-full w-2/12">
              <Image
                src={userImage}
                alt="User_Image"
                fill
                className='object-contain'
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          // If no user image, show the upload button
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture