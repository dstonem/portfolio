import React, {useState, useEffect} from "react"

function Main() {
	const [style, setStyle] = useState({
		opacity:0,
		transform:"translateY(30px)"
	})

	const [styleHeader, setStyleHeader] = useState({
		opacity:0,
		transform:"translateY(30px)"
	})

	function loadStyle() {
		setStyle({
			boxShadow:"0px 0px 5px 2px white",
			opacity:1
		})
		setStyleHeader({
			opacity:1
		})
	}

	useEffect(() => {
		setTimeout(loadStyle,1000)
	}, [])

	// const [sidebar, setSidebar] = useState(false)

	// function showSidebar() {
	// 	setSidebar(prevState => !prevState)
	// 	// $('#colorlib-aside').toggleClass()
	// 	console.log(sidebar)
	// }

	// const sideBar = document.getElementById('colorlib-aside')

	window.addEventListener('scroll',updateEffects)
	function updateEffects() {
		document.documentElement.style.setProperty(`--imgPos`,(40+(window.scrollY/30)) + "%")
		if(window.screen.width < 1200) {
			document.documentElement.style.setProperty(`--imgPos`,(20+(window.scrollY/20)) + "%")
		}
		console.log(window.scrollY)
	}

	return (
		<div className="colorlib-page" id="colorlib-main">

			<div className="accoladesContainer" align="right">
				<div className="accolades">
					<img style={style} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.gsu.edu%2Ffiles%2F2019%2F12%2F40u40-Logo.jpg&f=1&nofb=1" width="160px" alt="GSU 40 Under 40" />
					<img style={style} src="forbes.png" width="160px" alt="Forbes 30 Under 30"/>
				</div>
			</div>
			<div className="introText-container">
				<h1 className="introText" align="center" style={styleHeader}>Hi!<br /> I'm Dylan</h1>
			</div>
			<div id="about" className="aboutMe">
				<h3>About Me</h3>
				<p>I'm a co-founder and educator turned full stack web developer. I'm passionate about social and environmental activism, and am looking for a software development role in a purpose-driven company.</p>
			</div>
			<div className="portfolioHeader">
				<h1>Portfolio</h1>
				<div className="portfolioHeaderAnimate">
				</div>
			</div>

		</div>
	)
}

export default Main
