import React, { Component } from 'react'
import '../css/Footer.css'

export default class Footer extends Component {
  render () {
    return (
        <footer>
          <div>
            <h5>©2020 by Cindy Peng</h5>
          </div>
          <div className= 'row contacts' >
            <div className='contact-div'>
              <div className='mail'></div>
              <p> cindy002587@gmail.com </p>
            </div>
            <div className='contact-div'>
              <div className='tel'></div>
              <p> +46 72 840 93 62 </p>
            </div>
          </div>
        </footer>
    )
  }
}
