import React from "react"

function GalleryItem(props) {
  const style = {
    width: props.width
  }
  return (
    <div className="galleryItem" style={style}>
        <a href={props.href}><img src={props.imgUrl} width="100%"/></a>
        <figcaption className="caption">
          <h3>{props.title}</h3>
          <p>{props.caption}</p>
        </figcaption>
    </div>
  )
}

export default GalleryItem
