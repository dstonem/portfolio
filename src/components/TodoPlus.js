import React from "react"
import GalleryItem from "./GalleryItem"

function TodoPlus() {
  return (
    <div>
      <div className="gallery" id="portfolio">
        <GalleryItem
          width="500px"
          imgUrl="https://i.imgur.com/2cra5TT.png"
          title="Todo+"
          caption="Task management app for creatives, developers, and self-care."
          href=""
        />
        <p>Description of process and purpose</p>
      </div>
    </div>
  )
}

export default TodoPlus
