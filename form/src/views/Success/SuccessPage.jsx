import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
// import DoneIllustration from 'images/done.svg';

const SuccessPage = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <Box
        component='img'
        src={'/done.svg'}
        sx={{
          height: match ? '60vh' : '70vh',
          width: match ? '60vw' : '70vw',
        }}
      />
      <Typography
        variant={match ? 'subtitle1' : 'h6'}
        sx={{ fontWeight: 'bold' }}
      >
        You have successfully completed your registration.
      </Typography>
      <Typography
        variant={match ? 'subtitle1' : 'h6'}
        sx={{ fontWeight: 'bold' }}
      >
        Stay tuned for the results. For regular updates, follow our{' '}
        <a
          href='https://www.instagram.com/svceacm/'
          target='_blank'
          rel='noreferrer'
        >
          Instagram
        </a>{' '}
        page.
      </Typography>
    </Box>
  );
};
export default SuccessPage;
