import React from "react"
import GalleryItem from "./GalleryItem"

function Gallery() {
  return (
    <div>   
      <div className="gallery" id="portfolio">
          <GalleryItem
            imgUrl="todoPlus2.png"
            title="Todo+"
            caption="Task management app for creatives, developers, and self-care"
            href="https://scrimba.com/c/c6WRnDCr"
            descInspiration="After years of iterating on a system of Google Sheets to keep track of my tasks and projects, I decided to test out my pre-bootcamp React skills by building a smoother, more automated frontend than my spreadsheets. This is the only system that has worked for me, and I plan on building the backend so I can use it."
            role1="Learned React through video tutorials and created this project first with React classes, then with React hooks"
            techUsed="JavaScript, React, JSX, ES6"
            demo="https://scrimba.com/c/c6WRnDCr"
            github="https://github.com/dstonem/max_run"
          />
          <GalleryItem
            title="MaxRun!"
            href="https://github.com/dstonem/max_run"
            caption="Video game for my son"
            imgUrl="maxrun_screenshot.png"
            descInspiration="My seven-year-old is obsessed with 'running games' and wanted to see himself as the star of one. I added a blaster to his character's toolkit, but made it impossible to win with the blaster alone - to get through the last level he has to use his kindness power to turn the enemies into friends (*annoyed tone* 'daaaaaaad...')."
            role1="Created this object-oriented game as a solo project"
            role2="Iterated on the controls and the algorithm following some rather negative feedback"
            role3="Learned how to use the PyGame GUI"
            techUsed="Python, PyGame"
            github="https://github.com/dstonem/max_run"
          />
          <GalleryItem
            title="Goveri Prototype/Usability Testing Tool"
            caption="Frontend prototype of actapp"
            href="https://dstonem.github.io/goveri_prototype_usability_test_tool/"
            imgUrl="goveri_screenshot.png"
            descInspiration="Usability testing is an incredibly time consuming part of user experience (UX) research, so with this project I asked the big question, 'How might we automate this later stage of UX research?' and built an app prototype with an attached form to retrieve usability feedback asynchronously."
            role1="Led three-person remote team through agile development of an app prototype"
            role2="Constructed majority of frontend programming logic and API calls"
            role3="Designed usability testing survey"
            techUsed="Node.js, Express, PostgreSQL, HTML, CSS, JavaScript, Git, GitHub, Ubuntu, AWS"
            demo="https://dstonem.github.io/goveri_prototype_usability_test_tool/"
            github="https://github.com/dstonem/goveri_prototype_usability_test_tool"
          />
          <GalleryItem
            imgUrl="actapp_screenshot0.png"
            title="actapp 0.1"
            href="http://ec2-3-128-140-207.us-east-2.compute.amazonaws.com:4321/login"
            caption="Social media platform for activists"
            descInspiration="Accountability, data, and sustained engagement are what's necessary to shift our culture to one of social, environmental, and political activism. This MVP aims to put everything the user needs to be an active citizen in one place."
            role1="Led three-person remote team through agile app development"
            role2="Conducted user experience research to inform design and functionality of app"
            role3="Built backend architecture"
            role4="Designed database structure and queries"
            role5="Created wireframes and designed majority of responsive user interface"
            role6="Deployed using Amazon Web Services"
            techUsed="Node.js, Express, PostgreSQL, HTML, CSS, JavaScript, Git, GitHub, Ubuntu, AWS"
            demo="http://ec2-3-21-76-255.us-east-2.compute.amazonaws.com:4321/login"
            github="https://github.com/dstonem/actapp_MVP"
          />
          <GalleryItem
            imgUrl="actapp_protest_screenshot.png"
            title="actapp protest"
            href="https://actapp.us"
            caption="Eventbrite for protests"
            descInspiration="I wanted to build a tool that would support organizing and capturing data from protests, and promoting followup action after protests."
            role1="Solo project built in one week"
            techUsed="React, Node.js, Express, Passport, PostgreSQL, HTML, CSS, JavaScript, Git, GitHub, Ubuntu, AWS"
            demo=""
            github="https://github.com/dstonem/actapp_protest"
          />
          <GalleryItem
            imgUrl="actapp_screenshot.png"
            title="actapp.us"
            href="https://actapp.us"
            caption="A coordinated social activism experience with curated resources"
            descInspiration="Putting together everything we learned in the Digital Crafts Immersive Bootcamp program and more, our team transformed and updated actapp, adding functionality and scalability in new languages."
            role1="Led two-person remote team through two week project"
            role2="Implemented Redux state management system and React Native architecture using Expo"
            role3="Developed most of the functionality for Login, Register, Action, ActionsResources, Search, Menu, and Navbar components"
            role4="Built backend architecture and implemented authentication using JavaScript Web tokens"
            role5="Designed user interface in React Native StyleSheets responsive to any device"
            role6="Deployed securely using Amazon Web Services"
            techUsed="React, React Native, Redux, Expo, Node.js, Express, PostgreSQL, JavaScript Web Tokens, JavaScript, Git, GitHub, Ubuntu, AWS"
            demo="https://actapp.us"
            github="https://github.com/dstonem/actapp_MVP"
          />
        </div>
    </div>
  )
}

export default Gallery
