import React, { Component } from "react";

const NewsItem = (props) => {
  
    let { title, discription, imageurl,newsId,country,date,url} = props;
    let defaultUrl ="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-globe-world-news-flat-icon-png-image_5219613.png"
    return (
      
      <div className="bg-neutral-200 p-2  rounded-xl my-3 w-auto shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 ease-linear">
        <div className="flex justify-center">
         <img
          src={imageurl? imageurl : defaultUrl}
          className="border-cyan-500 p-2  my-0.5 rounded-2xl shadow-blue-600 w-fit h-33"
        />
        </div>
        <div className="flex flex-row flex-wrap"><span className="text-sm text-blue-700">{new Date(date).toGMTString()}</span></div>
        <div className=" text-black text-xl  w-full line-clamp-2 ">{title? title : "No title available "}</div>
        <div className=" text-black w-full line-clamp-4 text-sm mt-3">
            {discription ? discription : "No description available"}
         </div>
        <a href={`${url}`}>
          <button
            type="button"
             className="bg-red-500 text-white rounded-md p-1 m-2 left-0.5 bottom-0 mt-3 relative hover:bg-red-700" >
            Read More
          </button>
        </a>

      </div>
     
    );
  }

  export default NewsItem;
