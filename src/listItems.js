import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import 'font-awesome/css/font-awesome.min.css';
import DropdownList from './dropdownList.js'


const useStyles = makeStyles(theme => ({
  my_list: {
    padding: 0,
    color: '#95a7c3',
    fontSize: '.875rem',
    '& i.fa': {
      fontSize: '1.125rem;',
    },
    '& .MuiListItem-root': {
      paddingTop: ' 12px',
      paddingBottom: '12px',
    },
    '& span': {
      letterSpacing: '-0.035rem',
    },
  },
  nested: {
    '& >div': {
      paddingLeft: '1.5rem',
    },
    '& i.fa, & span': {
      fontSize: '.75rem',
    },

  },
}));
export function NestedList() {
  const classes = useStyles();


  return (
    <List
      component="nav"
      className={classes.my_list}
    >
      <div className="list_group">
        <ListItem button title="Calendar">
          <ListItemIcon>
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
          </ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItem>
        <ListItem button className="active">
          <ListItemIcon>
            <i className="fa fa-home" aria-hidden="true"></i>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </div>

      <div className="list_group">
        <DropdownList primary="Admin Plugins" iconClass="fa fa-fire">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-circle-o" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 2" />
            </ListItem>
          </List>
        </DropdownList>

        <DropdownList primary="Admin Forms" iconClass="fa  fa-check-square-o">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="2" />
            </ListItem>
          </List>
        </DropdownList>

        <DropdownList primary="Admin Layouts" iconClass="fa fa-columns">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="2" />
            </ListItem>
          </List>
        </DropdownList>
      </div>

      <div className="list_group">
        <DropdownList primary="Information Panels" iconClass="fa fa-bar-chart">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 2" />
            </ListItem>
          </List>
        </DropdownList>

        <DropdownList primary="Ecommerce" iconClass="fa fa-shopping-basket">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="2" />
            </ListItem>
          </List>
        </DropdownList>
      </div>

      <div className="list_group">
        <DropdownList primary="UI Elements" iconClass="fa fa-diamond">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Lorem 2" />
            </ListItem>
          </List>
        </DropdownList>

        <DropdownList primary="Plugins" iconClass="fa fa-bars">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="2" />
            </ListItem>
          </List>
        </DropdownList>

        <DropdownList primary="Pages" iconClass="fa fa-files-o">
          <List component="div" disablePadding className={classes.nested}>
            <ListItem button >
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <i class="fa fa-anchor" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="2" />
            </ListItem>
          </List>
        </DropdownList>
      </div>
      <div className="list_group">
        <ListItem button>
          <ListItemIcon>
            <i className="fa fa-circle-o" aria-hidden="true" style={{ color: '#f7c95c' }}></i>
          </ListItemIcon>
          <ListItemText primary="Executive Meeting" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fa fa-circle-thin" aria-hidden="true" style={{ color: '#ea5d50' }}></i>
          </ListItemIcon>
          <ListItemText primary="HelpDesk Redesign" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fa fa-circle-thin" aria-hidden="true" style={{ color: '#917dd6' }}></i>
          </ListItemIcon>
          <ListItemText primary="Sony Board Meeting" />
        </ListItem>
      </div>
    </List>
  );
}



