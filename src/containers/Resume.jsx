import React from "react";
import { connect } from "react-redux";

import Experience from "../components/Experience";
import { fetchExperiences } from "../actions/experiencesActions";

import MiniDivider from "../components/MiniDivider";
import Grid from "../components/Grid";
import Page from "./Page";

import styles from "./resume.scss";

const mapStateToProps = (state, action) => {
  return {
    experiences: state.experiences,
  }
}

class Resume extends React.Component {

	static fetchData (store, match = null) {
		return store.dispatch(fetchExperiences());
	}

	constructor(props) {
		super(props);

		this.state = {
			experiences: []
		}
	}

	componentDidMount() {

    let { experiences, dispatch } = this.props;

    let before = experiences.lastFetched;
    let now = + Date.now();

    if(!before || (now - before) > 100000) {
      dispatch(fetchExperiences());
    }
	}

	render() {

    let { experiences } = this.props;

    // For helmet
    let helmetData = {
      title: "EBEN / Résumé — Mike Hudson Full-Stack",
      meta: {
        title: "Résumé—Professional Experience and Education of Mike Hudson.",
        website: "http://eben.co.nz/resume/"
      }
    }

		return (
      <Page fetched={Boolean(experiences && experiences.all.length > 0)} helmetData={helmetData}>
        <div className="container">
          <MiniDivider />
  				<h1 className="doubleHeader">
            Résumé
            <span>Professional Experience and Education</span>
          </h1>
          <Grid className={ styles.resume }>
            <Grid.Column cols={6}>
              <h2>Career</h2>
              {
                experiences &&
                experiences.all.length > 0 &&
                experiences.all.map((experience, i) => <Experience key={i} {...experience} />)
              }
            </Grid.Column>
            <Grid.Column cols={5} pull className={ styles.secondRow }>
              <h2>Education</h2>
              <Experience
                title = "University of Tübingen"
                location = "Germany"
                role = "Bachelor of Science"
                content = {"BSc. in \"Media and Computer Science\" with a focus on human computer interaction and web development."}
                start_date = "2011-10-01"
                end_date = "2015-08-31"
              />
            </Grid.Column>
          </Grid>
  			</div>
      </Page>
		);
	}
}

export default connect(mapStateToProps)(Resume);
