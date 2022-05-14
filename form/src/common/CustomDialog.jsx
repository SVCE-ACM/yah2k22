import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

const CustomDialog = ({
  dialogOpen,
  handleClose,
  isSubmitting,
  submitForm,
}) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={(_, reason) => {
        if (reason) {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
        }
        handleClose();
      }}
    >
      <DialogTitle>Submit?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure? Once submitted, data cannot be edited.
        </DialogContentText>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isSubmitting && <CircularProgress sx={{ marginTop: '10px' }} />}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          disabled={isSubmitting}
          onClick={async () => {
            await submitForm();
            handleClose();
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
