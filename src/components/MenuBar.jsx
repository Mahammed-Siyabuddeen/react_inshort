import React from 'react'
import { CloseIcon } from '../icons/CloseIncon'
import { AnimatePresence, motion } from 'framer-motion'
import { fecthApi } from '../features/fecthApi';
import { useDispatch } from 'react-redux';
import { setNewData } from '../redux/newsSlice';
import { modalVariantsLeft } from '../features/modalVariants';
import { toast } from 'sonner';
function MenuBar({ setOpenMenu }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpenMenu((prev) => false)
    }

    const handleClick = (category) => {
        fecthApi({ category })
            .then((data) => {
                dispatch(setNewData(data.articles || []))
            })
            .catch((error) => {
                toast.error(error||"backend error ")
            })
        handleClose()
    }

    return (
        <AnimatePresence>
            <motion.div
                key={'model'}
                variants={modalVariantsLeft}
                initial='hidden'
                animate='visible'
                exit='exit'
                className="fixed bg-white top-0 w-1/5 max-md:w-4/5 h-dvh z-10 shadow-2xl border-l-2">
                <div onClick={handleClose} className="py-6 px-3 text-2xl text-red-500 animate-bounce  font-bold w-fit ml-auto cursor-pointer">
                    <CloseIcon />
                </div>
                <ul className='flex flex-col gap-6  '>
                    <li onClick={() => handleClick("business")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>Business</li>
                    <li onClick={() => handleClick("entertainment")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>Entertainment</li>
                    <li onClick={() => handleClick("general")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>General</li>
                    <li onClick={() => handleClick("health")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>Health </li>
                    <li onClick={() => handleClick("science")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>science</li>
                    <li onClick={() => handleClick("sports")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>Sports</li>
                    <li onClick={() => handleClick("technology")} className='text-xl font-medium pl-3 py-3 text-gray-500 cursor-pointer hover:bg-slate-100'>Technology</li>
                </ul>
            </motion.div>
        </AnimatePresence>
    )
}

export default MenuBar