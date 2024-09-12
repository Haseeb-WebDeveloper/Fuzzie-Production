'use client'

import ProfileForm from "@/components/forms/profile-form"
import ProfilePicture from "./_components/profilePicture"
import { useRouter } from "next/navigation"

type Props = {
  userImage: string | null
  onDelete: any
  onUpload: any
}

const Setting = ({userImage, onDelete, onUpload}: Props) => {
  const router = useRouter()
  const onRemoveProfileImage = async () => {
    // 'use server'
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <>
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b z-10'>
        <span>Settings</span>
      </h1>
      <div className='flex flex-col gap-10 p-6'>
        <div className='font-twk'>
          <h2 className='text-2xl font-bold'>User Profile</h2>
          <p className='text-base text-white/50'>Add and update your information.</p>
        </div>
        {/* profile picture */}
        <ProfilePicture
        onDelete={onRemoveProfileImage}
        userImage={userImage || ''}
        onUpload={onUpload}
        />
        <ProfileForm  user={1}/>
      </div>
    </div>
    </>
  )
}

export default Setting