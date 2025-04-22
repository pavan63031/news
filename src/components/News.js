import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  cap = (string) =>{
    return string.charAt(0) + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
       articles : [],
       loading : false,
       page : 1,
       totalResults : 0
    }
    document.title = `${this.cap(this.props.category)} - HeadLines`;
  }

  async updateNews(){
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
    this.props.setProgress(100);
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=71ce4a524294401ba70184a5cf1ba77a&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles,
    //   totalResults : parsedData.totalResults,
    //   loading : false
    // })
    this.updateNews();
  }

  handlePrev = async () =>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71ce4a524294401ba70184a5cf1ba77a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState(
    //   {
    //     page : this.state.page - 1,
    //     articles : parsedData.articles,
    //     loading : false
    //   }
    // )
    this.setState({page : this.state.page - 1});
    this.updateNews();
  }

  handleNext = async () =>{
  //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

  //   }
  //   else{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=71ce4a524294401ba70184a5cf1ba77a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading : true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState(
  //     {
  //       page : this.state.page + 1,
  //       articles : parsedData.articles,
  //       loading : false
  //     }
  //   )
  // }
  this.setState({page : this.state.page + 1});
  this.updateNews();
}

fetchMoreData = async () =>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({page : this.state.page + 1});
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles : this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading : false
    })
}

  render() {
    return (
      <>
        <h2 className='text-center' style={{margin : '40px 90px',marginTop : '90px'}}>News Monkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}

      <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore = {this.state.articles.length !== this.state.totalResults.length}
      loader = {<Spinner/>}
      >
        <div className="container">
        <div className='row'>
        {/* !this.state.loading &&  used this once  */}
        {this.state.articles.map((element) => {
          return(
          <div className='col-md-3' key={element.url}>
          <NewsItem title = {element.title ? element.title : ""} description = {element.description ? element.description : ""} imageurl = {element.urlToImage}
          newsid = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
      </div>);  
        })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button type='button' disabled = {this.state.page <= 1} class = 'btn btn-dark' onClick={this.handlePrev}>&larr; Previous</button>
          <button type='button' disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class = 'btn btn-dark' onClick={this.handleNext}> Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

