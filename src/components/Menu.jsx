import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

import Logo from "./Logo";
import GitHubButton from "./GitHubButton";

import styles from "./menu.scss";

class Menu extends React.Component {
	// no props

	render() {
		return (
			<div className={ styles.menu }>
				<GitHubButton />
				<div className="container">
					<Grid valign="center">
            <Grid.Column cols={6}>
	            <Logo />
	          </Grid.Column>
						<Grid.Column cols={6} className={ styles.navigation }>
							<Link data-title="About" to="/">About</Link>
							<Link data-title="Résumé"  to="/resume">Résumé</Link>
							<Link data-title="Projects"  to="/projects">Projects</Link>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Menu;
