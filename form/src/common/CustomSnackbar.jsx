import React from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const CustomSnackbar = (props) => {
  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      open={props.open}
      autoHideDuration={5000}
      onClose={props.handleClose}
    >
      <Alert
        variant='filled'
        severity={props.severity}
        onClose={props.handleClose}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};
export default CustomSnackbar;
