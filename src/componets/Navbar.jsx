import React, { use, useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import LetasNews from './LetasNews';
import { useParams } from 'react-router';

const newsPromis = fetch('/news.json').then(res => res.json())

const Navbar = () => {
  const data = use(newsPromis)
  const { id } = useParams();
 

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
    <div className='flex items-center gap-9 bg-base-200 p-4'>
      <div className='bg-primary px-4 py-2 text-base-100'>Latest</div>

      <Marquee className='gap-9 ' speed={100} pauseOnHover={true}>
        <div className='flex gap-9 '>

        {
          
          categoryNews.map(newscategory => <LetasNews newscategory={newscategory} ></LetasNews>)
        }
        </div>

      </Marquee>
    </div>
  );
};

export default Navbar;