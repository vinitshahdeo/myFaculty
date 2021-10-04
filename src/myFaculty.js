import React from "react";
import "./App.css";
import facultiesInfo from "./data/faculties";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class AutoCompletedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      showProfile: false,
      selectedFaculty: {},
    };
  }

  onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = facultiesInfo.sort().filter((v) => regex.test(v.FACULTY));
      // suggestions = suggestions.map((value) => value.FACULTY);
    }

    this.setState(() => ({
      suggestions,
      text: value,
      showProfile: false,
    }));
  };

  selectedText(value) {
    this.setState(() => ({
      text: value.FACULTY,
      suggestions: [],
      showProfile: true,
      selectedFaculty: value,
    }));
  }

  renderSuggestions = () => {
    let { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.selectedText(item)}>
            {item.FACULTY}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { text, suggestions } = this.state;
    return (
      <div id="wrapper">
        <div id="notebooks">
          <h2>
            <FontAwesomeIcon icon={faSearch} /> Search Your Faculty
          </h2>
          <input
            id="query"
            type="text"
            onChange={this.onTextChange}
            value={text}
          />
          {this.renderSuggestions()}
          {this.state.showProfile ? (
            <Profile {...this.state.selectedFaculty} />
          ) : (
            <div />
          )}
          <span>Suggestions: {suggestions.length}</span>
        </div>
      </div>
    );
  }
}
