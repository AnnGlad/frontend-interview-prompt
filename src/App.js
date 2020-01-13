import './App.css';
import 'typeface-roboto';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import avatar from './avatar.jpg'
import ClickAway from './topDwopdownMenu';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import { NestedList } from './listItems';
import Chart from './Chart';
import RevenueChart from './RevenueChart';
import SplitButton from './Filter';
import Footer from './Footer';
import { shortenNumbers, percentToString } from './Utils';

export let drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#31b5e0',
    justifyContent: 'space-between',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '9px',
    ...theme.mixins.toolbar,
    backgroundColor: '#20a6d3',
    minHeight: '70px !important',
    color: '#fff',
  },
  usrWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: 'none',
  },
  flex_alcenter: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButtonHidden: {
    display: 'none',
  },
  search: {
    position: 'relative',
    backgroundColor: 'transparent',
    '&:focus': {
      border: '2px solid rgba(255,255,255, .3)',
      borderRadius: theme.shape.borderRadius,
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(6),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: '1.7rem',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#fff',
    '&:placeholder': {
      color: '#fff !important',
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  avatar: {
    width: '70px',
    height: '70px',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#2a333e',
    color: '#91a7c6',
    border: 0,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('xs')]: {
      width: theme.spacing(9),
    },
    '& .MuiListItemText-root': {
      display: 'none',
    },
    '& .MuiButtonBase-root': {
      minHeight: '56px',
    },
    '& .MuiListItemIcon-root': {
      justifyContent: 'center',
      minWidth: '35px',
    },
    '&:hover': {
      width: '250px',
      '& .MuiListItemText-root': {
        display: 'block',
      },
    },
  },
  drawerIcon: {
    color: '#fff',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    minHeight: '100vh',
    marginBottom: '60px',
    width: `calc(100% - ${drawerWidth}px)`,
    // overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  totalBlock: {
    textAlign: 'center',
    marginBottom: '2rem',
    '&:not(:last-child) > div': {
      borderRight: '1px solid #eee',
    },
    '@media (max-width: 599px)': {
      '&:not(:last-child) > div': {
        borderRight: 0,
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    marginTop: '0',
    textTransform: 'capitalize',
    '& > span': {
      fontSize: '1rem',
      paddingLeft: '1rem',
      color: '#898989',
    }
  },
  mainPaper: {
    margin: '2rem 0',

    boxShadow: '0 0 1rem rgba(0,0,0,.15)',
  },
  paperBox: {
    padding: '2rem',
    borderBottom: '1px solid #eee',
  },
  fixedHeight: {
    height: 550,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [jsonData] = React.useState({
    Totals: {
      newFeedbacks: 500,
      totalProfit: 15000000,
      newOrders: 0,
      BrandPopularity: .99
    }
  });

  useEffect(() => {
    function updateDrawerWidth() {
      if (window.innerWidth <= 1200) {
        setOpen(false);
        drawerWidth = 80;
      } else {
        setOpen(true);
        drawerWidth = 250;
      }
    }
    window.addEventListener("resize", updateDrawerWidth);
    return () => window.removeEventListener("resize", updateDrawerWidth);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
    drawerWidth = 250;

  };

  const handleDrawerClose = () => {
    setOpen(false);
    drawerWidth = 80;
  };

  // Button styles
  const DefButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      color: '#bababa',
      backgroundColor: '#fff',
      borderColor: '#bababa',
      textTransform: 'uppercase',
      '&:hover': {
        backgroundColor: '#fff',
        borderColor: '#08ce8e',
        color: '#08ce8e',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#08ce8e',
        borderColor: '#08ce8e',
        color: '#fff',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(93,202,147,.5)',
      },
      '&.selected': {
        backgroundColor: '#08ce8e',
        borderColor: 'transparent',
        color: '#fff',
      }
    },
  })(Button);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.flex_alcenter}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                className="searchField"
              />
            </div>
          </div>
          <div className={classes.usrWrap} >
            <Avatar alt="User avatar" src={avatar} variant="square" className={classes.avatar} />
            <ClickAway />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >

        <div className={classes.toolbarIcon}>
          <a href="#" className="logoText">Logo</a>
          <IconButton onClick={handleDrawerClose} className={classes.drawerIcon} >
            <MenuIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NestedList />
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="titleHolder">
            <div className="breadcrumb">
              <a href="#">Dashboard</a>
              <Typography color="textSecondary">
                dashboard &amp; statistics
            </Typography>
            </div>
            <div className="btnHolder">
              <SplitButton options={['1 January 2020 - 1 February 2020 ', '17 January 2019 - 15 February 2019 ', '17 January 2016 - 15 February 2016 ']} buttonStyle={{ padding: ' .9rem 2.5rem', fontSize: '1rem', }} />
            </div>
          </div>
          <Paper className={classes.mainPaper}>
            <div className={classes.paperBox}>
              <h2 className={classes.sectionTitle}>Totals <span>Last Week</span></h2>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={6} lg={3} className={classes.totalBlock}>
                  <div>
                    <Typography component="p" variant="h3">
                      {shortenNumbers(jsonData.Totals.newFeedbacks)}
                    </Typography>
                    <Typography color="textSecondary">
                      New Feedbacks
                  </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className={classes.totalBlock}>
                  <div>
                    <Typography component="p" variant="h3">
                      {shortenNumbers(jsonData.Totals.totalProfit)}$
                  </Typography>
                    <Typography color="textSecondary">
                      Total Profit
                  </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className={classes.totalBlock}>
                  <div>
                    <Typography component="p" variant="h3">
                      {shortenNumbers(jsonData.Totals.newOrders)}
                    </Typography>
                    <Typography color="textSecondary">
                      New Orders
                  </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className={classes.totalBlock}>
                  <div>
                    <Typography component="p" variant="h3">
                      {percentToString(jsonData.Totals.BrandPopularity)}
                    </Typography>
                    <Typography color="textSecondary">
                      Brand Popularity
                  </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={classes.paperBox}>
              <Grid container spacing={8} >
                <Grid item xs={12} md={12} lg={6} >
                  <div className="titleHolder">
                    <h2 className={classes.sectionTitle}>Site Visits <span>Weekly Status</span></h2>
                    <div className="btnHolder">
                      <DefButton className="selected">
                        New
                      </DefButton>
                      <DefButton>
                        Returning
                      </DefButton>
                    </div>
                  </div>
                  <Chart />
                </Grid>
                <Grid item xs={12} md={12} lg={6} >
                  <div className="titleHolder">
                    <h2 className={classes.sectionTitle}>Revenue <span>Monthly sales</span></h2>
                    <div className="btnHolder">
                      <SplitButton options={['Filter range ', 'Option 1 ', 'Option 2']} buttonStyle={{ textTransform: 'uppercase' }} />
                    </div>
                  </div>
                  <RevenueChart />
                  <Grid container spacing={3} className="chartDataWrap">
                    <Grid item xs={6} md={3} lg={3} >
                      <Typography color="textSecondary" >
                        Revenue:
                      </Typography>
                      <Typography component="p" variant="h5" className="chartData">
                        $13.247
                      </Typography>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3} >
                      <Typography color="textSecondary">
                        Tax:
                      </Typography>
                      <Typography component="p" variant="h5" className="chartData">
                        $19.962
                      </Typography>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3} >
                      <Typography color="textSecondary" >
                        Shipment:
                      </Typography>
                      <Typography component="p" variant="h5" className="chartData">
                        $1.976
                      </Typography>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3} >
                      <Typography color="textSecondary">
                        Orders:
                      </Typography>
                      <Typography component="p" variant="h5" className="chartData">
                        529479
                      </Typography>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>
      </main>
      <Footer drawerWidth={open ? 250 : 72}></Footer>
    </div >
  );
}
