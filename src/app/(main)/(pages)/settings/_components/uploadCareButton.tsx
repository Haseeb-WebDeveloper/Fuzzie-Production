'use client'
import React, { useEffect } from 'react'
import '@uploadcare/react-uploader/core.css';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as LR from '@uploadcare/blocks';

type Props = {
  onUpload: (e:string) => any
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
        pubkey="173da5d653714ea6419a"
      />

     <lr-file-uploader-regular
       ctx-name="my-uploader"
       css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.50.4/web/lr-file-uploader-regular.min.css`}
       />

     <lr-upload-ctx-provider
       ctx-name="my-uploader"
       ref={ctxProviderRef}
       />
    </div>
  )
}

export default UploadCareButton