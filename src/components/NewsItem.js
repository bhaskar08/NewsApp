import React, { Component } from 'react'

const NewsItem=(props)=> {
    let {title,desc,urlToImage,url, dateAndTime, source}=props;
    return (
    <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>{source} <span className="visually-hidden">unread messages</span> </span>
        </div>
        <img src={urlToImage} className="card-img-top imgheight" alt="/"/>
        <div className="card-body">
          <h5 className="card-title titleheight">{title}</h5>
          <p className="card-text desheight">{desc}</p>
          <p className="card-text"><small className="text-muted">{dateAndTime}</small></p>
          <a href={url} target="__blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    )
  
}

export default NewsItem
