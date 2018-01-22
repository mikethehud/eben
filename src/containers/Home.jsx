import React from "react";
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
		return store.dispatch(fetchPage("home"));
	}

  componentDidMount() {
    let { page, dispatch } = this.props;

    // fetch if no page
    if(!page)
      dispatch(fetchPage("home"));
	}

	render() {

    let { page } = this.props;

    // For helmet
    let helmetData = {
      title: "About — Mike Hudson Full-Stack",
      meta: {
        title: "Hello, I am Mike. Full-Stack Developer, UI Designer, Web Consultant.",
        website: "http://eben.co.nz/"
      }
    }

		return (
      <Page fetched={Boolean(page)} helmetData={helmetData}>
        <div className="container">
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
                {page && <ReactMarkdown source={emojify(page.content)} />}
              </Content>
            </Grid.Column>
          </Grid>
        </div>
      </Page>
		);
	}
}

export default connect(mapStateToProps)(Home);
