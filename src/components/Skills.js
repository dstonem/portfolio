import React from "react"

function Skills({skills}) {
  return (
    <div className="skills-container">
        <div className="skills-header">
            <h2>Skills</h2>
        </div>
        <div className="skills">
            {skills.map(tech => (
            <div className="skill-div">
                <img src={`${tech}.png`} alt="tech icon"/>
                <p>{tech}</p>
            </div>
            ))}
        </div>
        {/* <div className="skills">
            <div className="skill-div">
                <img src="React Native.jpg" alt="tech icon"/>
                <p>React Native</p>
            </div>
            <div className="skill-div">
                <img src="React.png" alt="tech icon"/>
                <p>React</p>
            </div>
            <div className="skill-div">
                <img src="Redux.png" alt="tech icon"/>
                <p>Redux</p>
            </div>
            <div className="skill-div">
                <img src="Expo.png" alt="tech icon"/>
                <p>Expo</p>
            </div>
            <div className="skill-div">
                <img src="Node.png" id="node_icon"alt="tech icon"/>
                <p>Node</p>
            </div>
            <div className="skill-div">
                <img src="PostgreSQL.png" alt="tech icon"/>
                <p>PostgreSQL</p>
            </div>
            <div className="skill-div">
                <img src="AWS.png" alt="tech icon"/>
                <p>AWS</p>
            </div>
            <div className="skill-div">
                <img src="Express.png" id="express_icon"alt="tech icon"/>
                <p>Express</p>
            </div>
            <div className="skill-div">
                <img src="Python.png" alt="tech icon"/>
                <p>Python</p>
            </div>
            <div className="skill-div">
                <img src="JavaScript.png" alt="tech icon"/>
                <p>JavaScript</p>
            </div>
            <div className="skill-div">
                <img src="jQuery.png" alt="tech icon"/>
                <p>jQuery</p>
            </div>
            <div className="skill-div">
                <img src="CSS.png" alt="tech icon"/>
                <p>CSS</p>
            </div>
            <div className="skill-div">
                <img src="Bootstrap.png" alt="tech icon"/>
                <p>Bootstrap</p>
            </div>
            <div className="skill-div">
                <img src="HTML.png" alt="tech icon"/>
                <p>HTML</p>
            </div>
            <div className="skill-div">
                <img src="Ubuntu.png" alt="tech icon"/>
                <p>Ubuntu</p>
            </div>
            <div className="skill-div">
                <img src="Figma.png" alt="tech icon"/>
                <p>Figma</p>
            </div>
            <div className="skill-div">
                <img src="JWT.png" alt="tech icon"/>
                <p>JWT</p>
            </div>
            <div className="skill-div">
                <img src="Websockets.png" alt="tech icon"/>
                <p>Websockets</p>
            </div>
            <div className="skill-div">
                <img src="GraphQL.png" alt="tech icon"/>
                <p>GraphQL</p>
            </div>
            <div className="skill-div">
                <img src="Electron.png" alt="tech icon"/>
                <p>Electron</p>
            </div>
        </div> */}
    </div>
  )
}

export default Skills