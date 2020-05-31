import React from "react"
import { Link, withRouter } from "react-router-dom"

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
          <div className="projectIcons">
            <img src={props.iconOne} width="25px"/>
            <img src={props.iconTwo} width="25px"/>
            <img src={props.iconThree} width="25px"/>
          </div>
        </figcaption>
    </div>
  )
}

export default GalleryItem
