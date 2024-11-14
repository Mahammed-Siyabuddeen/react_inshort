import React, { useEffect, useState } from 'react'
import Card from './Card'
import SkelthonLoader from './SkelthonLoader'
import { fecthApi } from '../features/fecthApi'
import { useDispatch, useSelector } from 'react-redux';
import { setNewData } from '../redux/newsSlice';
import PreviewNews from './PreviewNews';
import { toast } from 'sonner';

function Cards() {
    const [loading, setLoading] = useState(true);
    const newsData = useSelector(state => state.newsData)
    const preview = useSelector(state => state.previewNews)
    const dispatch = useDispatch()
    useEffect(() => {
        fecthApi().then((data) => {
            console.log(data.articles);

            dispatch(setNewData(data.articles || []))

        })
            .catch((error) => {
                toast.error(error||"backend error ")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [dispatch])

    return (
        <div className="flex justify-center gap-4">
            <div className="flex-1 transition delay-300 ease-linear  max-w-4xl mx-auto my-4 ">
                <div className='flex flex-col gap-5'>
                    {
                        loading ?
                            <>
                                <SkelthonLoader />
                                <SkelthonLoader />
                            </>
                            :
                            newsData.map((item, index) => (
                                <Card key={index} data={item} />
                            ))
                    }
                </div>
            </div>
            {
                preview ?
                    <div className="flex-1 relative">
                        <PreviewNews />
                    </div>
                    : <></>
            }
        </div>
    )
}

export default React.memo(Cards)