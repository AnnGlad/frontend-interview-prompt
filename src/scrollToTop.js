import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default class ScrollToTop extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (

      <IconButton onClick={() => this.scrollToTop()} >
        <ExpandLessIcon style={{ color: '#a8abb9' }} />
      </IconButton>
    );
  }
}