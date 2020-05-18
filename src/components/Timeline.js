import React from "react"
import TimelineItem from "./TimelineItem"

function Timeline() {
  return (
    <div className="timeline container">
      <h1>Timeline</h1>
      <TimelineItem
        title="Software Developer"
        year="2020"
        // imgUrl="https://2.bp.blogspot.com/-ZXLpu5Nzpt8/T4x9HPE2uTI/AAAAAAAAA9c/7EjYn0cg6II/s200/horrified-scary-movie.gif"
        background="#f2f3f7"
        description=""
        borderBottom="3px solid #3c3"
      />
      <TimelineItem
        title="Educator, Web Developer"
        year="2019"
        // imgUrl="https://2.bp.blogspot.com/-ZXLpu5Nzpt8/T4x9HPE2uTI/AAAAAAAAA9c/7EjYn0cg6II/s200/horrified-scary-movie.gif"
        background="#f2f3f7"
        description="Taught 3D modeling and coding in Georgia's third 'lowest performing' school, City Council President, Learned React"
        borderBottom="3px solid #019"
      />
      <TimelineItem
        title="Co-Founder"
        year="2015-2018"
        // imgUrl="https://2.bp.blogspot.com/-ZXLpu5Nzpt8/T4x9HPE2uTI/AAAAAAAAA9c/7EjYn0cg6II/s200/horrified-scary-movie.gif"
        background="#f2f3f7"
        borderBottom="3px solid #f83"
        pressLink="https://www.forbes.com/profile/honorcode/#31591be72c34"
      />
    </div>
  )
}

export default Timeline
