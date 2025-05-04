import React, { useEffect, useState } from 'react';
import User from '../componets/User';
import Header from '../componets/Header';
import Righaside from '../componets/Righaside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../componets/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find(news => news.id == id)
        setNews(newsDetails)

    }, [id, data])
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <main className='w-11/12 mx-auto  grid grid-cols-12 gap-6'>
                <section className='col-span-9 '>
                    <h1 className='text-xl font-semibold my-3'>Dragon news</h1>

                    <NewsDetailsCard news={news}></NewsDetailsCard>

                </section>
                <section className='col-span-3'> <Righaside></Righaside></section>
            </main>

        </div>
    );
};

export default NewsDetails;