import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setPreviewNews } from '../redux/previewNewsSlice';

function Card({ data }) {
    const dispatch = useDispatch();
    const { author, title, description, urlToImage, publishedAt, source } = data;
    const [dateAndTime, setDateAndTime] = useState({
        time: "", date: "", day: "", month: "", year: ""
    });


    useEffect(() => {
        if (publishedAt !== null) {

            let publishedAt = new Date()
            let time = publishedAt.toLocaleTimeString([],
                { hour: '2-digit', minute: '2-digit' });

            let day = publishedAt.getDay()
            let date = publishedAt.getDate()
            let month = publishedAt.getMonth()
            let year = publishedAt.getFullYear()

            setDateAndTime((prev) => {
                return { day, time, date, month, year };
            })

        }
    }, [publishedAt])

    const handleNewsClick = () => {
        dispatch(setPreviewNews(data))
    }
    return (
        <div onClick={handleNewsClick} className="flex gap-2 p-4 shadow-md rounded-md cursor-pointer max-md:flex-col max-md:m-4 ">
            <div className="basis-1/3 skelton-manual">
                <img loading='lazy' className='h-full object-cover ' src={urlToImage} alt="news" />
            </div>
            <div className="basis-2/3 flex flex-col gap-2">
                <h1>{title}</h1>
                <div className="flex text-sm text-gray-500">
                    <p>
                        <span className='font-bold text-black'>Short By  </span>
                        {author}
                    </p>
                    <p>
                        /{`${dateAndTime.time} on ${dateAndTime.date} ${dateAndTime.year}`}
                    </p>
                </div>
                <p>{description}</p>
                <p className='text-sm  font-medium mt-auto'>read more at <span className='text-gray-500'>{source.name}</span></p>
            </div>
        </div>
    )
}

export default React.memo(Card)