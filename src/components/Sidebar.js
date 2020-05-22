import React, { useState } from 'react'

export default function Sidebar() {
    const [sidebarPosition, setSidebarPosition] = useState("translateX(-300px)")

//JUST NEED TO BE ABLE TO HIDE THE SIDEBAR AGAIN!
//be sure to include that the bar hides when the "portfolio" link is clicked
    function revealSidebar(){
      setSidebarPosition("translateX(0px)")
      console.log(sidebarPosition)
    }

    return (
      <div>
      <style>
            {`
              :root {
                --sidebarPosition: ${sidebarPosition};
                }

              .sidebar-container {

              }
            `}
      </style>
        <div className="sidebar-container">
        <nav onClick={revealSidebar} href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside">
            <div className="text-center">
              <div className="author-img"></div>
              <h1 id="colorlib-logo"><a href="index.html">Dylan Stone-Miller</a></h1>
              <span className="email"><i className="icon-mail"></i> stonemiller.dylan@gmail.com</span>
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
