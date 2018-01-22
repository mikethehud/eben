import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import styles from "./page.scss";

const mapStateToProps = (state, action) => {
  return {
    server: state.app.server
  }
}

class Page extends React.Component {

  static propTypes = {
    // REQUIRED: bool status if the page is fetched or not
    fetched: PropTypes.bool.isRequired,

    // REQUIRED: bool if we are currently on server/client side
    server: PropTypes.bool.isRequired,

    // REQUIRED: data object to put into helmet
    helmetData: PropTypes.shape({
      // REQUIRED: string title data
      title: PropTypes.string.isRequired,
      // REQUIRED: object with meta data
      meta: PropTypes.shape({
        // REQUIRED: string website url
        website: PropTypes.string.isRequired,
        // REQUIRED: string page title for social media
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { helmetData, fetched } = this.props;

    return (
      <div>
        <Helmet
					title={"EBEN / " + helmetData.title}
          meta={[
            { name: "twitter:site", content: helmetData.meta.website },
            { name: "twitter:title", content: helmetData.meta.title },
            { property: "og:title", content: helmetData.meta.title },
            { property: "og:url", content: helmetData.meta.website },
          ]}
				/>

        {
          !fetched &&
          <div className={ styles.page } key="page-spinner" className={ styles.spinner }></div>
        }

        <CSSTransitionGroup
      		transitionName="page"
          transitionAppear={true}
          transitionEnter={true}
          transitionAppearTimeout={800}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={1}
      	>
          {
            fetched &&
            <div className={ styles.page } key="page-children">{ this.props.children }</div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

}

export default connect(mapStateToProps)(Page);
