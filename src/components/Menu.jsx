import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import GitHubButton from "./GitHubButton";

import styles from "./menu.scss";

class Menu extends React.Component {

	_handleClick = () => {
		alert('clicked');
	}

	render() {
		return (
			<div className={ styles.menu }>
				<GitHubButton />
				<div className="container">
	        <div className="grid grid-center">
	          <div className="column col-6">
	            <Logo />
	          </div>
	          <div className={ "column col-6 " + styles.navigation }>
							<Link data-title="About" to="/">About</Link>
							<Link data-title="Résumé"  to="/resume">Résumé</Link>
							<Link data-title="Projects"  to="/projects">Projects</Link>
	          </div>
	        </div>
				</div>
			</div>
		);
	}
}

export default Menu;
