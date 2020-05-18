import React from "react"

function TimelineItem(props) {

    const style = {
      backgroundColor: props.background,
      borderBottom: props.borderBottom
    }

    return (
      <div className="row">
        <div className="timeline-item" style={style}>
          <div className="timeline-item-header">
            <h2>{props.title}</h2>
            <p><i>{props.year}</i></p>
          </div>
          <div className="timelineImg">
            <img height="100%"  align="right" src={props.imgUrl} />
          </div>
          <div className="timelineText">
            <p>{props.description}</p>
            <p><a href={props.pressLink}>Press</a></p>
          </div>
        </div>
      </div>
    )
}

export default TimelineItem
