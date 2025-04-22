import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsid,author,date,source} = this.props;
    
    return (
      <div className="my-3">
        <div className="card" style={{width : "250px"}}>
          <div style = {{display : 'flex',
            justifyContent : 'flex-end',
            position : 'absolute',
            right : 0
          }}>
          <span class="badge rounded-pill bg-danger">
    {source}
  </span>
          </div>
        <img src= {imageurl ? imageurl : "https://imgs.search.brave.com/gij2i7H_hZ4gmzNl1MIPSKaziY9T_4trT9f_Aul97CY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcwOTYx/NzUuanBn"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}
          
          </h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()}</small></p>
          <a href={newsid} target='_blank' className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
  }
}

