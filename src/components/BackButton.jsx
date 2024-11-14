import React from 'react'
import { LeftArrowIcon } from '../icons/LeftArrowIcon'
import { useDispatch } from 'react-redux'
import { removePreviewNews } from '../redux/previewNewsSlice';

function BackButton() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removePreviewNews())
    }
    return (
        <div onClick={handleClick} className='text-red-500  m-2 px-3  text-6xl w-fit cursor-pointer'>
            <LeftArrowIcon />
        </div>
    )
}

export default BackButton