import React, { Component } from 'react'
// import logoo from './logoo.gif'
import reload from './reload.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={reload} alt="logo" style={{height : '50px' ,width : '50px'}} />
      </div>
    )
  }
}
