import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps= {
    dataLength: 0,
    country:'in',
    category:'general',
    // setProgress:30
  }
  static propTypes= {
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state={
      articles:[],
      loading: false,
      page:1,
      result:0,
      hasMore: true
      
    }
  }
  capital = (word)=>{
    let temp = word.charAt(0).toUpperCase();
    word= temp+word.slice(1,word.length)
    return word;
  }
  async componentDidMount(){
    this.props.setProgress(20);
    this.setState({loading:true});
    let link=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b8aafa42e140d4a3b65f8c6ca93175&page=1&pageSize=10`;
    // this.props.setProgress(30);
    let data = await fetch(link);
    let parsedData = await data.json();
    document.title=`MyNews-${this.capital(this.props.category)}`;
    this.props.setProgress(100);
    this.setState({articles: parsedData.articles, result: parsedData.totalResults, loading:false});
  }

  // clickPrev = async()=>{
  //   await window.scrollTo({top:0,left:0,behavior: 'instant'});
  //   this.setState({loading:true});
  //   let link=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b8aafa42e140d4a3b65f8c6ca93175&page=${this.state.page-1}&pageSize=20`;
  //   let data = await fetch(link);
  //   let parsedData = await data.json();
  //   this.setState({loading: false, articles: parsedData.articles,page: this.state.page-1});
  // }
  // clickNext = async()=>{
  //   await window.scrollTo({top:0,left:0,behavior: 'instant'});
  //   this.setState({loading:true});
  //   let link=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b8aafa42e140d4a3b65f8c6ca93175&page=${this.state.page+1}&pageSize=20`;
  //   let data = await fetch(link);
  //   let parsedData = await data.json();
  //   this.setState({loading:false, articles: parsedData.articles,page: this.state.page+1});
  // }

  fetchMoreData = async() => {
    if (this.state.page >= Math.ceil(this.state.result/10)) {
      this.setState({ hasMore: false, loading:false });
      return;
    }
    this.setState({loading:true});
    let link=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2b8aafa42e140d4a3b65f8c6ca93175&page=${this.state.page+1}&pageSize=10`;
    let data = await fetch(link);
    let parsedData = await data.json();
    this.setState({loading:false, articles: this.state.articles.concat(parsedData.articles),page: this.state.page+1});
  };

  render() {
    return (
      <>
        <div className='container mb-10 mt-3'><h1 style={{fontFamily:"garamound", fontWeight:"200%",marginTop:"90px",marginBottom:"30px"}}><center>TOP-HEADLINES</center></h1>
        {this.state.loading && <Loader/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.result}
          loader={<Loader/>}
        >            
          <div className="row mx-1">
          {this.state.articles.map((element)=>{
            return <div className="col-lg-4 col-md-6 my-2" key={element.url}>
            <NewsItem title={!element.title?"":element.title.slice(0,100)} desc={!element.description?"":element.description.slice(0,100)} imgUrl={!element.urlToImage?"https://akm-img-a-in.tosshub.com/sites/headlinestoday/resources/images/headlinestoday_fb.jpg":element.urlToImage} 
            newsUrl={element.url} newsDate={element.publishedAt} source={element.source.name} author={!element.author?"":<p className="card-text mt-0"><small className="text-muted">-{element.author}</small></p>}/>
            </div>
          })}   
          </div>
        </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.clickPrev}> &larr; Previous </button>
          <button disabled={this.state.page>= Math.ceil(this.state.result/20)} type="button" className="btn btn-dark" onClick={this.clickNext} >Next &rarr;</button>
        </div> */}
      </>
    )
  };
}

export default News;