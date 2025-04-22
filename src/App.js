
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
// 71ce4a524294401ba70184a5cf1ba77a
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
    this.apiKey = process.71ce4a524294401ba70184a5cf1ba77a;
  }
  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
 
  render() {
    let country = "us";
    // apiKey = process.env.REACT_APP_NEWS_API
  
    return (<div>
        <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
      />
      <Routes>
      <Route exact path='/' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={4} country={country} category="general" />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize={4} country={country} category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={4} country={country} category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" pageSize={4} country={country} category="health" />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" pageSize={4} country={country} category="science" />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={4} country={country} category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={4} country={country} category="technology" />} />
        </Routes>
      </Router>
      </div>
    )
  }
}

