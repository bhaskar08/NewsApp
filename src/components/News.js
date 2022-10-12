import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      const [articles,setArticles]=useState([]);
      const [loading,setLoading]=useState(false);
      const [page,setPage]=useState(1);
      const [totalResult,setTotalResult]=useState(0);


    const updateNew = async ()=>{
        props.setProgress(30)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data= await fetch(url);
        props.setProgress(70);
        let parsedData=await data.json();
        props.setProgress(90);
        setArticles(parsedData.articles);
        setTotalResult(parsedData.totalResults)

        props.setProgress(100);
    }

    useEffect(()=>{
      document.title=`News24x7-${capitalizeFirstLetter(props.category)}`
        updateNew();
    },[])

    const fetchMoreData = async () => {

        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data= await fetch(url);
        let parsedData=await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults)

      };


    return (

        <>
        <div style={{margin:'85px'}}>
        <h2 className='my-3 text-center' >Top {capitalizeFirstLetter(props.category)} Headlines-News24x7</h2>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResult}
          loader={<Spinner/>}
        >
        <div className="row mx-2">
            {!loading && articles.map((element)=>{
                 return <div key={element.url} className="col-md-4 my-3">
                    <NewsItem title={element.title} desc={element.description} source={element.source.name} dateAndTime={new Date(element.publishedAt).toGMTString()} urlToImage={element.urlToImage?element.urlToImage:'https://images.hindustantimes.com/img/2022/10/02/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1664669588097_1664669588097.jpg'} url={element.url}/>
                </div>
            })}
        </div>
        </InfiniteScroll>
        </div>
      </>
    )
  
}

export default News