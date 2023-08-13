import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-102671813,width-1070,height-580,imgsize-689763,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"Q1 results today: 81 companies include Aurobindo Pharma, Rail Vikas Nigam Limited or RVNL, Finolex Cables, Amara Raja Batteries, Suprajit Engineering, Sindhu Trade Links, Kirloskar Industries, Landmark Cars, Siyaram Silk Mills, etc"}</p>
            <a href={newsUrl} className="btn btn-dark">Read More</a>
        </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
