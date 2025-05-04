
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../componets/NewsCard';

const CategoriesNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
 
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return
        } else if (id == '1') {
            const filterNews = data.filter((news) => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
        } else {
            const allfilterNews = data.filter((news) => news.category_id == id)
            setCategoryNews(allfilterNews);
          
        }
        // console.log(filterNews)


    }, [data, id])

    return (
        <div>
            <h1 className='font-semibold text-xl'>Categories news - {categoryNews.length}</h1>

            <div className='grid grid-cols-1 mb-5 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default CategoriesNews;