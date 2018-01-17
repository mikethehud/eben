import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import { emojify } from "node-emoji";
import config from "../../config.js";
import { Link } from "react-router-dom";

import Content from "../components/Content";
import MiniDivider from "../components/MiniDivider";
import Grid from "../components/Grid";
import Stack from "../components/Stack";
import Page from "./Page";

import styles from "./casestudy.scss";

import { fetchProjects, selectProject } from "../actions/projectsActions";

const mapStateToProps = (state, action) => {
  return {
    projects: state.projects
  }
}

class CaseStudy extends React.Component {

  static fetchData (store, match = null) {
    let slug = "";

    if(match)
      slug = match.params.slug;

		return store.dispatch(fetchProjects(slug));
	}

  componentDidMount() {
    let before = this.props.projects.lastFetched;
    let now = + Date.now();

    let slug = this.props.match.params.slug;

    console.log(slug);

    if(!before || (now - before) > 100000) {
      this.props.dispatch(fetchProjects(slug));
    }
    else {
      console.log("Just select Project...");
      this.props.dispatch(selectProject(slug));
    }
	}

	render() {

    let currentProject = this.props.projects.current;

    if(!currentProject)
      return <Page fetched={false} />;
    else {
      return (
        <Page fetched={true}>

    			<div className="container">
    				<Helmet
    					title={"EBEN / Case Study — " + currentProject.name}
    				/>
            <MiniDivider />
            <h1 className="doubleHeader">
              {currentProject.name}
              <span>
                {currentProject.role}<br />
                {
                  currentProject.client &&
                  <span>
                    with <a href={currentProject.website} target="_blank">{currentProject.client}</a>
                  </span>
                }
              </span>
            </h1>
            <Content>
  						<Stack
  							technologies={currentProject.technologies.data}
  						/>
              <ReactMarkdown source={emojify(currentProject.description)} />

              {
                currentProject.image && currentProject.image.data && currentProject.image.data.url &&
                <div className={ styles.wideImgWrapper }>
                  <img
                    src={config.api.fileUrl + currentProject.image.data.url}
                    alt={currentProject.name + " Screenshots"}
                    onLoad={this._handleImageLoaded}
                    className={ styles.wideImg }
                  />
                  {
                    currentProject.live_version &&
                    <a href={currentProject.live_version} className={ styles.liveVersion } target="_blank">Project in Action</a>
                  }
                </div>
              }

              <h3>Responsibilities</h3>
              <ReactMarkdown source={emojify(currentProject.responsibilities)} />
              <div className={ styles.backLink }>
                <Link to="/projects">
                  &larr; See all projects
                </Link>
              </div>
            </Content>
    			</div>
        </Page>
  		);
    }
	}
}

export default connect(mapStateToProps)(CaseStudy);
