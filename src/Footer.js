import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScrollToTop from './scrollToTop';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {new Date().getFullYear()} {' '}
      by{' '}
      <Link color="inherit" href="#">
        TemplateMonster
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#f0f2f5',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: props => props.width,
    boxShadow: 'inset 0 9px 24px 0 rgba(0,0,0,.1)',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }
});

export default function Footer(props) {
  const classes = useStyles({ width: `calc(100% - ${props.drawerWidth}px)` });
  const { drawerWidth } = props;
  return (
    <React.Fragment>
      <footer className={classes.footer}>

        <Container maxWidth="xl">
          <Copyright />
          <ScrollToTop />
        </Container>
      </footer>
    </React.Fragment >
  );
}

