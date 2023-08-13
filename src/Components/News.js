import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("This is news constructor");
        this.state={
            articles:[],
            loading:true,
            page:1,
            pageSize: 5
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=9f6a2f5ea558482db4c59338e168ab7d&page=1&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=9f6a2f5ea558482db4c59338e168ab7d&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles,
        })
    }
    handleNextClick=async()=>{
        if (this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)){

        }
        else {
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=9f6a2f5ea558482db4c59338e168ab7d&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parseData=await data.json();
            console.log(parseData);
            this.setState({
                page:this.state.page+1,
                articles:parseData.articles,
            })
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News-Top Headlines</h1>
        <div className='row'> 
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
        }
        )}
        </div>
        <div className='container d-flex justify-content-between'>
            <button type='button' disabled={this.state.page<=1}className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)}className='btn btn-dark'onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
