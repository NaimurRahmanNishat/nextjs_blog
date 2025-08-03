import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-4 col-span-full">
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  )
}

export default Loader;