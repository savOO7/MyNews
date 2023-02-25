import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imgUrl,newsUrl,newsDate,source,author} = this.props;
    return (
    <>
      <div className="card position-relative" >
        <div className="container position-absolute top-0 start-0 translate-middle-y">
          <span className="badge rounded-pill text-bg-danger">{source}</span>
        </div>
        <img src={imgUrl} className="card-img-top img-fluid" style={{width:"100%",height:"200px",objectFit:"cover"}}alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}...</p>
          {author}
          <p className="card-text"><small className="text-muted" style={{fontSize:"12px"}}>{new Date(newsDate).toGMTString()}</small></p>
          <a rel="noreferrer" target="_blank" href={newsUrl} className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </>
    )
  }
}

export default NewsItem