import React from "react";

import GitHubMark from "../../assets/img/GitHub-Mark-Light-32px.png";

import styles from "./githubbutton.scss";

class GitHubButton extends React.Component {

  render() {
    return (
      <a href="https://github.com/mikethehud/eben" target="_blank" alt="eben.co.nz code on GitHub" className={ "btn btn-small btn-primary " + styles.githubbutton }>
        View Sourcecode on GitHub <img src={GitHubMark} alt="eben Logo" className={ styles.githubmark } />
      </a>
    )
  }

}

export default GitHubButton;
