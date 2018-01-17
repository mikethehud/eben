import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";

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
    let before = this.props.experiences.lastFetched;
    let now = + Date.now();

    if(!before || (now - before) > 100000) {
      this.props.dispatch(fetchExperiences());
    }
    else {
      console.log('Not fetching yet');
    }
	}

	render() {

    console.log(this.props.experiences);

		return (
      <Page fetched={this.props.experiences && this.props.experiences.all.length > 0}>
        <div className="container">
          <Helmet
  					title="EBEN / Résumé — Mike Hudson Full-Stack"
  				/>
          <MiniDivider />
  				<h1 className="doubleHeader">
            Résumé
            <span>Professional Experience and Education</span>
          </h1>
          <Grid className={ styles.resume }>
            <Grid.Column cols={6}>
              <h2>Career</h2>
              {
                this.props.experiences &&
                this.props.experiences.all.length > 0 &&
                this.props.experiences.all.map((experience, i) => <Experience key={i} {...experience} />)
              }
            </Grid.Column>
            <Grid.Column cols={5} pull className={ styles.secondRow }>
              <h2>Education</h2>
              <Experience
                title = 'University of Tübingen'
                location = 'Germany'
                role = 'Bachelor of Science'
                content = 'BSc. in "Media and Computer Science" with a focus on human computer interaction and web development.'
                start_date = '2011-10-01'
                end_date = '2015-08-31'
              />
            </Grid.Column>
          </Grid>
  			</div>
      </Page>
		);
	}
}

export default connect(mapStateToProps)(Resume);
