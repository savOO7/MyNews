import React, { Component } from 'react'
import load from './LoaderGif.gif'

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="Loading..." style={{height:"50px", width:"50px", marginBottom:"8px" }}></img>
      </div>
    )
  }
}
