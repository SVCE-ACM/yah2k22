import React, { useEffect, useState } from 'react';

import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import AcmImage from 'images/acm-logo.png';

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
        sx={{
          backgroundColor: '#222944',
        }}
      >
        <LinearProgress
          style={{
            width: '100%',
            height: '6px',
            position: 'sticky',
            backgroundColor: '#222944',
          }}
          color={'secondary'}
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
              //   router.replace('/');
              // take to Yah home page
            }}
          >
            <img
              src={AcmImage}
              alt='acm logo'
              style={{
                height: '45px',
                width: '45px',
                cursor: 'pointer',
              }}
            />
          </Box>

          <Typography
            variant='h5'
            onClick={() => {
              //   router.replace('/');
              // take to Yah home page
            }}
            sx={{
              fontWeight: 'bold',
              marginLeft: '10px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            YAH! 2k22
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>

        <Box m={0.3} width={'100%'} />
      </AppBar>
    </ElevationScroll>
  );
};
export default CustomAppbar;
