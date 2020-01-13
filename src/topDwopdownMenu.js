import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'font-awesome/css/font-awesome.min.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  dropdownIcon: {
    color: '#fff',
    marginLeft: '1.5rem',
  },
  wrapper: {
    position: 'relative',
  },
  div: {
    position: 'absolute',
    top: '60px',
    right: 0,
    left: 'auto',
    minWidth: '200px',
    color: '#474c58',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.wrapper}>
        <IconButton onClick={handleClick} className={classes.dropdownIcon}>
          <ExpandMoreIcon />
        </IconButton>
        {open ? (
          <div className={classes.div}>
            <List component="nav" aria-label="user-settings">
              <ListItem button>
                <ListItemIcon>
                  <i class="fa fa-user" aria-hidden="true"></i>
                </ListItemIcon>
                <ListItemText primary="My profile" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </List>

          </div>
        ) : null}
      </div>
    </ClickAwayListener >
  );
}