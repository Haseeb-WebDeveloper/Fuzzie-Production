import React from 'react'


const LogsPage = () => {
  return (
    <div className="flex flex-col  relative rounded-tl-3xl">
      <h1 className="text-2xl sticky top-0  rounded-tl-3xl p-4 bg-background/50 backdrop-blur-lg flex items-center     border-b z-10">
        Logs
      </h1>
      <div className='max-w-[1400px] mx-auto w-full p-4'>
        {/* Rest of the page */}
        <div className="hidden md:block aspect-[5/1] rounded-xl shadow-lg">
                <video autoPlay loop muted className='w-full h-full object-cover' src="/video.mp4" />
            </div>
      </div>
      <p className='text-muted-foreground text-center text-md md:text-lg max-w-[600px] mx-auto mt-8'>
        This page is undergoing maintenance 🚧<br /> Please stay tuned for the next update!
        </p>
    </div>
  )
}

export default LogsPage
