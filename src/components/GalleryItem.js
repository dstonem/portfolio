import React, { useState } from "react"
import TechUsed from './TechUsed'

function GalleryItem(props) {
  const [hovering,setHovering] = useState(false)
  console.log(hovering,'hovering')
  const style = {
    width: "500px"
  }

  const hoveringStyle = {
    height:'100%',
    backgroundColor:'white',
    opacity:hovering ? 0 : 1,
    transition: '0.3s'
  }
  
  return (
    <div className="galleryItem" style={style}>
      <figcaption className="caption">
          <h3><a href={props.href}>{props.title}</a></h3>
          <p>{props.caption}</p>
      </figcaption>
        <div className="gallery-image-container" style={hoveringStyle}>
          <img src={props.imgUrl} width="100%" onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)} alt="app screenshot" />
        </div>
        <div className="gallery-item-description">
          <h3>Inspiration</h3>
          <p>{props.descInspiration}</p>
          <h3>Roles</h3>
          <ul>
            <li>{props.role1}</li>
            <li>{props.role2}</li>
            <li>{props.role3}</li>
            <li>{props.role4}</li>
            <li>{props.role5}</li>
            <li>{props.role6}</li>
          </ul>
          <h3>Technologies Used</h3>
          <TechUsed 
            skills={props.techUsed}
          />
        </div>
        <div className="demo">
            <p><a href={props.demo}>Demo</a></p>
            <p><a href={props.github}>Github</a></p>
        </div>
    </div>
  )
}

export default GalleryItem
