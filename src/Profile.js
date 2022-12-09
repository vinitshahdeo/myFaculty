import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faClock,
  faBook,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div id="facultyInfo">
          <FontAwesomeIcon icon={faUser} />
          {this.props.FACULTY}
        </div>
        <div id="facultyInfo">
          <FontAwesomeIcon icon={faHome} />
          {this.props.VENUE}
        </div>
        <div id="facultyInfo">
          <FontAwesomeIcon icon={faClock} />
          {this.props.SLOT}
        </div>
        <div id="facultyInfo">
          <FontAwesomeIcon icon={faBook} />
          {this.props.TITLE}
        </div>
        <div id="facultyInfo">
          <FontAwesomeIcon icon={faBookmark} />
          {this.props.CODE}
        </div>
      </div>
    );
  }
}

export default Profile;
