import React from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import styles from "./experience.scss";

class Experience extends React.Component {

  render() {

    let { title, location, role, content, responsibilities, start_date, end_date } = this.props;

    let start = moment(start_date, 'YYYY-MM-DD');
    let start_parsed = (
      <div className={ styles.start }>
        {start.format('MMM')}. {start.format('YYYY')}
      </div>
    );

    let end = moment(end_date, 'YYYY-MM-DD');
    let end_parsed = (
      <div className={ styles.end }>
        {end.format('MMM')}. {end.format('YYYY')}
      </div>
    )

    if(end_date == '1990-01-01') {
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
        <h3>{title}</h3>
        <div className={ styles.location }>{location}</div>
        <div className={ styles.role }>{role}</div>
        <div className={ styles.content }>
          <ReactMarkdown source={content} />
        </div>
        { // Only show if responsibilities is valid
          responsibilities &&
          (
            <div className={ styles.responsibilities }>
              <h4>Responsibilities</h4>
              <ReactMarkdown source={responsibilities} />
            </div>
          )
        }

      </div>
    )
  }

}

export default Experience;
