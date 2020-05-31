import React from "react"
import GalleryItem from "./GalleryItem"

function Gallery() {
  return (
    <div>
      <div className="gallery" id="portfolio">
        <GalleryItem
          width="500px"
          imgUrl="https://i.imgur.com/2cra5TT.png"
          title="Todo+"
          caption="Task management app for creatives, developers, and self-care."
          href="https://scrimba.com/c/c6WRnDCr"
          iconTwo="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&f=1&nofb=1"
        />
        <GalleryItem
          width="500px"
          imgUrl=""
          caption=""
          href=""
        />
        <GalleryItem
          width="500px"
          imgUrl=""
          caption=""
          href=""
        />
      </div>
    </div>
  )
}

export default Gallery
