'use client'
import React, { useEffect } from 'react'
// import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as LR from '@uploadcare/blocks';

type Props = {
  onUpload: any
}

LR.registerBlocks(LR)


const UploadCareButton = ({onUpload}: Props) => {

  const router = useRouter()
  const ctxProviderRef = useRef<
  typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)



  useEffect(() => {
    const handleUpLoad = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if(file) {
        router.refresh()
      }
    }

     ctxProviderRef.current?.addEventListener('file-upload-success', handleUpLoad)
  }, [])
  
  

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="a9428ff5ff90ae7a64eb"
      />

     <lr-file-uploader-regular
       ctx-name="my-uploader"
       css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
       />

     <lr-upload-ctx-provider
       ctx-name="my-uploader"
       ref={ctxProviderRef}
       />
    </div>
  )
}

export default UploadCareButton

