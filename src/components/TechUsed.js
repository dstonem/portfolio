import React from "react"

function TechUsed({skills}) {
    return (
        <div className="skills">
            {skills.map(tech => (
            <div className="tech-div">
                <img src={`${tech}.png`} alt="tech icon" className='tech-icon'/>
                <p>{tech}</p>
            </div>
            ))}
        </div>
    )
}

export default TechUsed