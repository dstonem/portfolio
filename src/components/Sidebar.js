import React, { useState } from 'react'

export default function Sidebar() {
    const [sidebarPosition, setSidebarPosition] = useState("translateX(-300px)")
    const [sidebarOut, setSidebarOut] = useState(true)

    function revealSidebar() {
      setSidebarOut(!sidebarOut)
      sidebarOut ? setSidebarPosition("translateX(0px)") : setSidebarPosition("translateX(-300px)")
      console.log(sidebarOut)
    }

    const [activeClass, setActiveClass] = useState(false)
    //const [classBoolean, setClassBoolean] = useState(true)

    function setActive() {
      setActiveClass(!activeClass)
    }

    return (
      <div>
      <style>
            {`
              :root {
                --sidebarPosition: ${sidebarPosition};
                }
            `}
      </style>
        <div className="sidebar-container">
        <nav onClick={revealSidebar} href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside">
            <div className="text-center">
              <div className="author-img"></div>
              <h1 id="colorlib-logo"><a href="index.html">Dylan Stone-Miller</a></h1>
              <span className="email"><a className="emailSpan" href="mailto:dstonemiller@gmail.com">dstonemiller@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className={!activeClass ? "active" : null} onClick={setActive}><a href="#colorlib-main" data-nav-section="colorlib-main">Introduction</a></li>
                  <li className={activeClass ? "active" : null} onClick={setActive}><a href="#portfolio" data-nav-section="portfolio">Portfolio</a></li>
                  <li><a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:e1a9add2-aebf-4090-b739-a67782863b25" download="StoneMiller_Resume_2021.pdf">Resume</a></li>
                </ul>
              </div>
            </nav>
            <nav >
              <ul id="social-media-icons">
                <li><a href="https://www.linkedin.com/in/dylan-stone-miller"><img src="https://imgur.com/y10an9a.png" width="28px" alt="social icon"/></a></li>
                <li><a href="https://github.com/dstonem/"><img src="https://i.imgur.com/HItcIhU.png" width="28px" alt="social icon"/></a></li>
                <li><a href="https://www.facebook.com/dylan.stonemiller"><img src="https://i.imgur.com/XnMhaR1.png" width="28px" alt="social icon"/></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with React and coffee
                </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
