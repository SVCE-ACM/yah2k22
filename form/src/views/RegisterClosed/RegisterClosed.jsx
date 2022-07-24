import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Footer from 'common/Footer/footer';

const RegisterClosed = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
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
        
        <Typography
          variant={match ? 'subtitle1' : 'h6'}
          sx={{ fontWeight: 'bold' }}
        >
          Registrations are now closed.
        </Typography>
        <Typography
          variant={match ? 'subtitle1' : 'h6'}
          sx={{ fontWeight: 'bold' }}
        >
        Selected Teams will be notified soon.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};
export default RegisterClosed;
