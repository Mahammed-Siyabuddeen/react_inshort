import React from 'react'

function SkelthonLoader() {
    return (
        <div className="flex animate-pulse gap-2 div-2 shadow-md rounded-md h-60">
            <div className="basis-1/3 bg-slate-200 m-2 rounded-md">
            </div>
            <div className="basis-2/3 animate-pulse flex flex-col gap-2 p-4   ">
                <div className=' h-2 bg-slate-200 rounded'></div>
                <div className='h-2 w-1/3 bg-slate-200 rounded'></div>
                <div className=' h-2 bg-slate-200 rounded mt-4'></div>
                <div className=' h-2 bg-slate-200 rounded'></div>
                <div className=' h-2 bg-slate-200 rounded'></div>
                <div className=' h-2 bg-slate-200 rounded'></div>
                <div className=' h-2 w-2/3 bg-slate-200 rounded'></div>
                <div className=' h-2 w-1/4 bg-slate-200 rounded mt-auto'></div>
            </div>
        </div>
    )
}

export default SkelthonLoader

// skelton-manual h-2 bg-slate-200 rounded col-sdivan-2 