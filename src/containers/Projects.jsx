import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import Helmet from "react-helmet";
import Selekt from "react-selekt";

import Project from "../components/Project";
import { fetchProjects } from "../actions/projectsActions";

import MiniDivider from "../components/MiniDivider";
import Grid from "../components/Grid";
import Arrow from "../../assets/img/Arrow.svg";
import Page from "./Page";
import styles from "./projects.scss";

const mapStateToProps = (state, action) => {
  return {
    projects: state.projects,
  }
}

class Projects extends React.Component {

	static fetchData (store, match = null) {
		return store.dispatch(fetchProjects());
	}

	constructor(props) {
		super(props);

		this.state = {
			projects: [],
      filter: []
		}
	}

	componentDidMount() {
    let before = this.props.projects.lastFetched;
    let now = + Date.now();

    if(!before || (now - before) > 100000) {
      this.props.dispatch(fetchProjects());
    }
    else {
      console.log('Not fetching yet');
    }
	}

  _handleFilterChange = (selected) => {
    this.setState({ filter: selected })
  }

	render() {

    const { projects } = this.props;
    const { filter } = this.state;

    let filters = [
      'ReactJS',
      'NodeJS',
      'Bootstrap',
      'Wordpress',
      'Express',
      'PHP',
      'MySQL',
      'MongoDB',
      'REST API'
    ]

    let filteredProjects = projects.all.filter((item) => {
      let techs = item.technologies;

      return filter.length < 1 ||
        (
          techs &&
          techs.data &&
          techs.data.filter((techitem) => {
            console.log('filtering', techitem.name, 'with', filter);
            return filter.indexOf(techitem.name) > -1
          }).length > 0
        )
    })

		return (
      <Page fetched={projects.fetched}>
  			<div className="container">
          <Helmet
  					title="EBEN / Projects — Mike Hudson Full-Stack"
  				/>
          <MiniDivider />
  				<Grid>
            <Grid.Column cols={6}>
              <h1 className="doubleHeader">
                Projects
                <span>Samples of previous work</span>
              </h1>
            </Grid.Column>
            <Grid.Column cols={6} className={ styles.filter }>
              <div className={ styles.arrowhint }>
                <img src={Arrow} className={ styles.arrow } />
                <a href="https://github.com/mikethehud/react-selekt" alt="React Selekt" className={ styles.content } target="_blank">Check out this custom React component</a>
              </div>
              <Selekt
                options={filters}
                selected={filter}
                onChange={this._handleFilterChange}
                placeholder="Search for technologies"
                classes={{
                  selector: {
                    wrapper: styles.selector
                  },
                  selected: {
                    wrapper: styles.selected
                  }
                }}
              />
            </Grid.Column>
          </Grid>
          <Grid>
            <CSSTransitionGroup
              transitionName="project"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}
            >
              {filteredProjects.map((item, i) => {
                return (
                  <Grid.Column cols={6} key={i}>
                    <Project {...item} filter={this.state.filter} />
                  </Grid.Column>
                )
              })}
            </CSSTransitionGroup>
          </Grid>
  			</div>
      </Page>
		);
	}
}

export default connect(mapStateToProps)(Projects);
