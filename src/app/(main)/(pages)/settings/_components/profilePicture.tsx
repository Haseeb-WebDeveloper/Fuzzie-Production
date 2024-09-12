// 'use client'

// import React from 'react'
// import UploadCareButton from './uploadCare-Button'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'
// import { X } from 'lucide-react'

// type Props = {
//     userImage: string | null
//     onUpload: any
//     onDelete: any
// }

// const profilePicture = ({userImage, onUpload, onDelete}: Props) => {
//     const router = useRouter()
//     const onRemoveProfileImage = async () => {
//         const respose = await onDelete()
//         if (respose.ok) {
//             router.refresh()
//         }
//     }
    
//   return (
//     <div className='flex flex-col'>
//         <p className='text-lg font-twk text-white'>Profile Picture</p>
//         <div className="flex h-[30vh] flex-col items-center justify-center">

//         { userImage ? (
//             <>
//                 <div className='relative h-full flex flex-col items-center '>
//                     <Image
//                     src={userImage}
//                     alt='User Profile Picture'
//                     fill
//                     />
//                 </div>
//                 <button 
//                 onClick={onRemoveProfileImage}
//                 className='bg-transparent text-white/70 hover:bg-transparent hover:text-white border-none'
//                 > <X/> Remove Logo</button>
//             </>
//         ) : (
//             <>
//                 <UploadCareButton onUpload={onUpload} />
//             </>
//         )}
            
            
//         </div>
//     </div>
//   )
// }

// export default profilePicture