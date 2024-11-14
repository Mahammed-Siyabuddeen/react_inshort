import React from 'react'
import { useSelector } from 'react-redux'
import BackButton from './BackButton';
import { AnimatePresence, motion } from 'framer-motion';
import { modalVariantsRigth } from '../features/modalVariants';

function PreviewNews() {
    const data = useSelector(state => state.previewNews)
    const { author, title, urlToImage, source, content } = data;

    return (
        <div className='fixed 
        max-md:inset-0 max-md:bg-black/20 max-md:h-screen
         h-96 overflow-scroll'>
            <AnimatePresence>
                <motion.div
                    key={'model'}
                    variants={modalVariantsRigth}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className="bg-white py-6 px-4 flex
                    max-md:m-10
                    max-md:rounded
                     flex-col gap-3 h[calc(100vh-60px)] 
                      overflow-scroll">
                    <BackButton />
                    <div className="h-64">
                        <img className='h-full w-full object-cover' src={urlToImage} alt="" />
                    </div>
                    <div className="basis-2/3 flex flex-col gap-2">
                        <h1 className='text-2xl font-bold '>{title}</h1>
                        <div className="flex text-sm text-gray-500">
                            <p>
                                <span className='font-bold text-black'>Short By  </span>
                                {author}
                            </p>
                        </div>
                        <p >{content}</p>
                        <p className='text-sm  font-medium mt-auto'>read more at <span className='text-gray-500'>{source.name}</span></p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default PreviewNews