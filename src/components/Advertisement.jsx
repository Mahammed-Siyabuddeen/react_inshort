import React from 'react'

function Advertisement() {
  return (
    <div className="bg-red-500 flex items-center text-white shadow w-3/4 mx-auto my-4 py-1 px-2">
        <p className='flex-1 '>For the Best Experience use Inshort App on your smartPhone</p>
        <img src="appstore.png" className='w-auto h-16 object-cover text-white ' alt="" />
        <img src="playstore.png" className='w-auto h-16 object-cover' alt="" />
    </div>
  )
}

export default React.memo(Advertisement)