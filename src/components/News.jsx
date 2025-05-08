import React, { useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'

import 'remixicon/fonts/remixicon.css'

import PropTypes from "prop-types";


const News = (props) => {
  
  
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  const[fallback,setFallback]=useState(null)
  

  const setfallbackTimer = () => {
         let fallbackTimer = setTimeout(() => {
          setFallback(<p className="col-span-full text-center text-gray-600 text-2xl mt-4">
            <i className="ri-wifi-fill text-red-500 text-3xl mr-2"></i>
            Check Your Internet Connection
          </p>)
    }, 6000);
  }


  useEffect(() => {
    setfallbackTimer();
    updatenews();
  }, []);
    
    
  const updatenews = async (pageNum = page) => {
    try {
      setLoading(true);
      let Apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a35d5f172fb0492a838ce3492decce15&page=${pageNum}&pageSize=${props.pageSize}`;
      let data = await fetch(Apiurl);
      let parsedata = await data.json();
      console.log(parsedata);
      console.log(Apiurl);
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(true);
    }
  };
  
  const prehandle = async () => {
    if (page <= 1) return;
    const newPage = page - 1;
    setPage(newPage);
    await updatenews(newPage);
   
    const nextBtn = document.getElementById('next');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.style.cursor = 'pointer';
      nextBtn.style.opacity = '1';
    }
  }

  const nextdisable = () => {
    const maxPages = Math.min(Math.ceil(totalResults / props.pageSize), 10);
    if (page >= maxPages) {
      document.getElementById('next').disabled = true;
      document.getElementById('next').style.cursor = 'not-allowed';
      document.getElementById('next').style.opacity = '0.5';

    } else {
      document.getElementById('next').disabled = false;
    }
  }

  const nexthandle = async () => {
    const newPage = page + 1;
    setPage(newPage);
    nextdisable();
    await updatenews(newPage);
   
  }


    return (
      <div>
        <h1 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 shadow-lg p-4 rounded-lg mx-4 my-6">
          Today’s Top News
        </h1>

         <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4  my-4  items-center w-full justify-center-safe gap-5 overflow-y-scroll h-160">
          {articles && articles.length > 0 ? (
            !loading && articles.map((e) => (
             
              <NewsItem
                key={e.url}
                title={e.title}
                date={e.publishedAt}
                imageurl={e.urlToImage}
                discription={e.description}
                url={e.url}
              />
            ))
          ) : (
            fallback || <div className="w-full flex justify-center items-center min-h-[70vh] pt-20">
            <Spinner />
          </div>

          )}
        </div>

        <div className="flex justify-between items-center sticky h-xl bottom-0 bg-white/40 backdrop-blur-md border-t border-white/20 shadow-lg px-6 py-3 mt-6 rounded-t-lg z-50">
          <button onClick={prehandle} disabled={page <= 1} style={(page <= 1) ? { opacity: '0.5' } : { opacity: '1' }} id='previous' className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200" >
            ← Previous
          </button>
          <div className="w-8 h-8 border-2 border-red-500 shadow-2xl rounded-full flex items-center justify-center">
            <p className="text-black text-2xl">{page}</p>
          </div>
          <button onClick={nexthandle} id='next' className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md  hover:scale-105 transition-all duration-200" >
            Next →
          </button>
        </div>

      </div>
    )
  }


export default News

News.defaultProps = {
  country: 'us',
  category: 'general',
  pageSize: 12
}
News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
}
