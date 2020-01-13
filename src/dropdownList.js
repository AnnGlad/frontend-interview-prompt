import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <i className={this.props.iconClass} aria-hidden="true"></i>
          </ListItemIcon>
          <ListItemText primary={this.props.primary} />
          {isOpen ? <ExpandLess /> : <NavigateNextIcon />}
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {this.props.children}
        </Collapse>
      </div>
    )
  }
}

