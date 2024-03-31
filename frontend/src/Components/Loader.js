import React from 'react'

function Loader() {
  return (
    <div className="h-screen items-center inset-0 flex justify-center fixed bg-primary z-[100]">
        <div className='flex gap-5 text-6xl sm:text-3xl font-semibold'>
            <h1 className="text-black f1">loading</h1>
            <h1 className="text-black f2">...</h1>
        </div>
    </div>
  )
}

export default Loader;