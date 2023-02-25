import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,Routes,Route,
} from 'react-router-dom'


export default class MyNews extends Component {
  state={progress:0}
  setProgress =(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
    <>
    <Router>
      <div>
        <Navbar/>
        <LoadingBar color='#f11946' progress={this.state.progress}/>
        <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" country="in" category="general" />}></Route>
          <Route exact path="/business" element={ <News setProgress={this.setProgress} key="business" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={ <News setProgress={this.setProgress} key="health" country="in" category="health" />}></Route>
          <Route exact path="/science" element={ <News setProgress={this.setProgress} key="science" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} key="sports" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} key="technology" country="in" category="technology" />}></Route>
          <Route exact path="/general" element={ <News setProgress={this.setProgress} key="general" country="in" category="general" />}></Route>
        </Routes>
      </div>
    </Router>
    </>
    )
  }
}

