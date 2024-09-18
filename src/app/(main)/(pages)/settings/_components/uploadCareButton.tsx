'use client'
import React, { useEffect } from 'react'
import '@uploadcare/react-uploader/core.css';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as LR from '@uploadcare/blocks';

// Define props type for the UploadCareButton component
type Props = {
  onUpload: (e:string) => any
}

// Register Uploadcare blocks
LR.registerBlocks(LR)

// UploadCareButton component for handling file uploads
const UploadCareButton = ({onUpload}: Props) => {
  const router = useRouter()

  // Create a ref for the UploadCtxProvider component
  const ctxProviderRef = useRef<
  typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    // Define the upload handler function
    const handleUpLoad = async (e: any) => {
      // Call the onUpload function with the CDN URL of the uploaded file
      const file = await onUpload(e.detail.cdnUrl)
      if(file) {
        // Refresh the router if the file upload was successful
        router.refresh()
      }
    }

    // Add event listener for successful file uploads
    ctxProviderRef.current?.addEventListener('file-upload-success', handleUpLoad)
  }, [])
  
  return (
    <div>
      {/* Uploadcare configuration */}
      <lr-config
        ctx-name="my-uploader"
        pubkey="173da5d653714ea6419a"
      />

      {/* File uploader component */}
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.50.4/web/lr-file-uploader-regular.min.css`}
      />

      {/* Upload context provider */}
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton