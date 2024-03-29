import React, { useEffect, useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  LinearProgress,
  makeStyles,
  Hidden,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import { useLocation, useHistory } from 'react-router-dom';

import AcmImage from '../../Module/Assets/acm/acm-logo.png';

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const CustomAppbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const classes = useStyles();
  const location = useLocation();
  const router = useHistory();

  useEffect(() => {
    let computeProgress = () => {
      const scrolled = document.body.scrollTop;
      const scrollLength =
        document.body.scrollHeight - document.body.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setScrollPos(parseInt(progress));
    };

    window.addEventListener('scroll', computeProgress);

    return () => window.removeEventListener('scroll', computeProgress);
  }, []);

  return (
    <ElevationScroll>
      <AppBar
        position='sticky'
        style={{
          transition:
            'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
          backgroundColor: scrollPos > 19 ? '#ffffff' : '#222944',
        }}
      >
        <LinearProgress
          style={{
            width: '100%',
            height: '6px',
            position: 'sticky',
            transition:
              'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
            backgroundColor: scrollPos > 19 ? '#ffffff' : '#222944',
          }}
          color={scrollPos > 19 ? 'primary' : 'secondary'}
          variant='determinate'
          value={scrollPos}
        />
        <Box m={0.3} width={'100%'} />
        <Toolbar
          style={{
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <Box
            onClick={() => {
              router.replace('/');
            }}
          >
            <img
              src={AcmImage}
              alt='acm logo'
              style={{
                height: '50px',
                width: '50px',
                cursor: 'pointer',
              }}
            />
          </Box>

          <Typography
            variant='h4'
            onClick={() => {
              router.replace('/');
            }}
            style={{
              fontWeight: 'bold',
              marginLeft: '10px',
              transition:
                'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
              color: scrollPos > 19 ? 'black' : 'white',
              cursor: 'pointer',
            }}
          >
            YAH! 2k22
          </Typography>
          <div className={classes.grow} />
          {location.pathname !== '/register' && (
            <Hidden implementation='css' xsDown>
              <Button
                onClick={() => {
                  window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <Typography
                  variant='h5'
                  style={{
                    fontWeight: 'bold',
                    transition:
                      'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                    color: scrollPos > 19 ? 'black' : 'white',
                  }}
                  color='inherit'
                >
                  About
                </Typography>
              </Button>
              <Link to={`#domains`}>
                <Button>
                  <Typography
                    variant='h5'
                    style={{
                      fontWeight: 'bold',
                      transition:
                        'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                      color: scrollPos > 19 ? 'black' : 'white',
                    }}
                    color='inherit'
                  >
                    Domains
                  </Typography>
                </Button>
              </Link>

              <Link to={`#format`}>
                <Button>
                  <Typography
                    variant='h5'
                    style={{
                      fontWeight: 'bold',
                      transition:
                        'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                      color: scrollPos > 19 ? 'black' : 'white',
                    }}
                    color='inherit'
                  >
                    Format
                  </Typography>
                </Button>
              </Link>

              <Link to={`#faq`}>
                <Button>
                  <Typography
                    variant='h5'
                    style={{
                      fontWeight: 'bold',
                      transition:
                        'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                      color: scrollPos > 19 ? 'black' : 'white',
                    }}
                    color='inherit'
                  >
                    FAQs
                  </Typography>
                </Button>
              </Link>

              <Link to={`#sponsors`}>
                <Button>
                  <Typography
                    variant='h5'
                    style={{
                      fontWeight: 'bold',
                      transition:
                        'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                      color: scrollPos > 19 ? 'black' : 'white',
                    }}
                    color='inherit'
                  >
                    Sponsors
                  </Typography>
                </Button>
              </Link>
              <Link to={`#contact`}>
                <Button>
                  <Typography
                    variant='h5'
                    style={{
                      fontWeight: 'bold',
                      transition:
                        'background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1) 0s',
                      color: scrollPos > 19 ? 'black' : 'white',
                    }}
                    color='inherit'
                  >
                    Contact
                  </Typography>
                </Button>
              </Link>
            </Hidden>
          )}
        </Toolbar>

        <Box m={0.3} width={'100%'} />
      </AppBar>
    </ElevationScroll>
  );
};
export default CustomAppbar;
