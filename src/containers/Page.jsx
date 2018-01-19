import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import styles from "./page.scss";

const mapStateToProps = (state, action) => {
  return {
    server: state.app.server
  }
}

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { fetched, children, server } = this.props;

    return (
      <div>

        {
          // Spinner if not fetched yet
          (!fetched || server) &&
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
          { fetched && !server &&
            <div className={ styles.page } key="page-children-">{ this.props.children }</div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

}

export default connect(mapStateToProps)(Page);
