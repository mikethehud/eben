import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import { emojify } from "node-emoji";

import { fetchPage } from "../actions/pageActions"

import Content from "../components/Content";
import MiniDivider from "../components/MiniDivider";
import Grid from "../components/Grid";
import Page from "./Page";

const mapStateToProps = (state, action) => {

  return {
    page: state.pages.items.home,
  }
}

class Home extends React.Component {

  static fetchData (store, match = null) {
		return store.dispatch(fetchPage('home'));
	}

  componentDidMount() {
    /*let before = this.props.experiences.lastFetched;
    let now = + Date.now();

    if(!before || (now - before) > 100000) {*/
      this.props.dispatch(fetchPage('home'));
    /*}*/
	}

	render() {

    // For helmet
    let helmetData = {
      title: "Hello, I am Mike. Full-Stack Developer, UI Designer, Web Consultant.",
      website: "http://eben.co.nz"
    }

		return (
      <Page fetched={this.props.page}>
        <div className="container">
          <Helmet
  					title="EBEN / About — Mike Hudson Full-Stack"
            meta={[
              { name: 'twitter:site', content: helmetData.website },
              { name: 'twitter:title', content: helmetData.title },
              { property: 'og:title', content: helmetData.title },
              { property: 'og:url', content: helmetData.website },
            ]}
  				/>
          <MiniDivider />
          <Grid>
            <Grid.Column cols={6}>
              <h1 className="doubleHeader">
                Hello, I am Mike.
                <span>
                  Full-Stack&nbsp;Developer, UI&nbsp;Designer, Web&nbsp;Consultant & <nobr>Pizza Lover. {emojify(":pizza:")}</nobr>
                </span>
              </h1>
            </Grid.Column>
            <Grid.Column cols={6}>
              <Content>
                {this.props.page && <ReactMarkdown source={emojify(this.props.page.content)} />}
              </Content>
            </Grid.Column>
          </Grid>
        </div>
      </Page>
		);
	}
}

export default connect(mapStateToProps)(Home);
