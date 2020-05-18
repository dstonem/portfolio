import React, { Component } from 'react'

export default class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      sidebarRevealed:false,
      style:{
        width:""
      }
    }

    this.revealSidebar = this.revealSidebar.bind(this)
  }

  revealSidebar() {
    this.setState(prevState => {
      return {
        sidebarRevealed: !prevState.sidebarRevealed
      }
    })


  }

  render() {
    console.log(this.state.sidebarRevealed)
    // if(this.state.sidebarRevealed == true) {
    //   return (
    //     this.setState({style:{width:"300px"}})
    //   )
    //   }

    return (
      <div>
        <div>
        <nav onClick={this.revealSidebar} href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
          <aside id="colorlib-aside">
            <div className="text-center">
              <div className="author-img"></div>
              <h1 id="colorlib-logo"><a href="index.html">Dylan Stone-Miller</a></h1>
              <span className="email"><i className="icon-mail"></i> dsmdev@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#colorlib-main" data-nav-section="colorlib-main">Introduction</a></li>
                  <li><a href="#portfolio" data-nav-section="portfolio">Portfolio</a></li>
                </ul>
              </div>
            </nav>
            <nav >
              <ul id="social-media-icons">
                <li><a href=""><img src="https://i.imgur.com/XnMhaR1.png" width="28px"/></a></li>
                <li><a href=""><img src="https://i.imgur.com/HItcIhU.png" width="28px"/></a></li>
                <li><a href=""><img src="" width="28px"/></a></li>
                <li><a href=""><img src="" width="28px"/></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with React.js and coffee
                  <br />
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
