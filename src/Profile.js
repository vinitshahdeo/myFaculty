import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClock, faBook, faBookmark  } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class Profile extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <div class="facultyInfo"><FontAwesomeIcon icon={faUser} /><b> Faculty</b><br></br>{this.props.FACULTY}</div>
                <div class="facultyInfo"><FontAwesomeIcon icon={faHome} /><b> Venue</b><br></br>{this.props.VENUE}</div>
                <div class="facultyInfo"><FontAwesomeIcon icon={faClock} /><b> Slot</b><br></br>{this.props.SLOT}</div>
                <div class="facultyInfo"><FontAwesomeIcon icon={faBook} /><b> Title</b><br></br>{this.props.TITLE}</div>
                <div class="facultyInfo"><FontAwesomeIcon icon={faBookmark} /><b> Code</b><br></br>{this.props.CODE}</div>
            </div>  
        );
    }
}

export default Profile;