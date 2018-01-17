import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import styles from "./page.scss";

class Page extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { fetched, children } = this.props;

    return (
      <div>

        {
          // Spinner if not fetched yet
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
          { fetched &&
            <div className={ styles.page } key="page-children-">{ this.props.children }</div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

}

export default Page;
