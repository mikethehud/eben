import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import moment from "moment";

import styles from "./experience.scss";

class Experience extends React.Component {

  static propTypes = {
    // REQUIRED: title string
    title: PropTypes.string.isRequired,

    // REQUIRED: simple string that describes location
    location: PropTypes.string.isRequired,

    // REQUIRED: string that describes the role
    role: PropTypes.string.isRequired,

    // REQUIRED: main description text
    content: PropTypes.string.isRequired,

    // OPTIONAL: markdown formatted list or text of responsibilities
    responsibilities: PropTypes.string,

    // REQUIRED: start date
    start_date: PropTypes.string.isRequired,

    // REQUIRED: end date
    // => when this is 1990-01-01, it is a current role
    end_date: PropTypes.string.isRequired
  }

  render() {

    let { title, location, role, content, responsibilities, start_date, end_date } = this.props;

    let start = moment(start_date, "YYYY-MM-DD");
    let start_parsed = (
      <div className={ styles.start }>
        {start.format("MMM")}. {start.format("YYYY")}
      </div>
    );

    let end = moment(end_date, "YYYY-MM-DD");
    let end_parsed = (
      <div className={ styles.end }>
        {end.format("MMM")}. {end.format("YYYY")}
      </div>
    )

    if(end_date == "1990-01-01") {
      end_parsed = (
        <div className={ styles.end }>
          <span className={ styles.current }>current</span>
        </div>
      )
    }

    return (
      <div className={ styles.container }>
        <div className={ styles.time }>
          {start_parsed} &mdash; {end_parsed}
        </div>
        <h3>{role}</h3>
        <div className={ styles.location }>{location}</div>
        <div className={ styles.role }>{title}</div>
        <div className={ styles.content }>
          <ReactMarkdown source={content} />
        </div>
        { // Only show if we have responsibilities
          responsibilities &&
          (
            <div className={ styles.responsibilities }>
              <ReactMarkdown source={responsibilities} />
            </div>
          )
        }

      </div>
    )
  }

}

export default Experience;
