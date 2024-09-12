import ProfileForm from "@/components/forms/profile-form"

type Props = {}

const Setting = (props: Props) => {
  // const onRemoveProfileImage = async () => {
  //   'use server'
  //   const respose = await db.user.update({
  //     where: {
  //       clerkId: authUser.id
  //     },
  //     data: {
  //       profileImage: ""
  //     }
  //   })
  // }


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
        {/* <ProfilePicture
        onDelete={deleteProfileImage}
        userImage={user?.profileImage || ''}
        onUpload={uploadProfileImage}
        /> */}
        <ProfileForm  user={1}/>
      </div>
    </div>
    </>
  )
}

export default Setting