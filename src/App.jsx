import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./styles/global.scss";

class App extends React.Component {

	constructor(props) {
		super(props);

		var data = props.initialData;

		this.state = { data: data }
	}

	render() {

		return (
			<div>
        <Menu />
				<Switch>
					{routes.map((route, i) => <Route key={i} {...route} />)}
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
