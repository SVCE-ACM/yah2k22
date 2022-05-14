import React, { useState } from 'react';
import {
  Card,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Divider,
  MenuItem,
} from '@mui/material';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { teamCountStore } from 'stores/teamCountStore';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from 'db/firebaseapp';
import CustomDialog from 'common/CustomDialog';
import CustomSnackbar from 'common/CustomSnackbar';
import { snackBarStore } from 'stores/snackbarStore';

const RegisterView = () => {
  const count = teamCountStore((state) => state.count);
  const snackbar = snackBarStore((state) => state);
  return (
    <div>
      <Typography
        sx={{
          margin: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        Register for YAH! 2K22
      </Typography>
      <FormikStepper
        initialValues={{}}
        onSubmit={async (values) => {
          try {
            //REACT_APP_SOURCE is the password to read and write data in firestore db.
            values['source'] = process.env.REACT_APP_SOURCE;
            const yahEntryColumnRef = collection(db, 'yah_entry');
            await addDoc(yahEntryColumnRef, values);
          } catch (error) {
            snackbar.setmessage(
              'There is some error in adding your information. Please contact us immediately.'
            );
            snackbar.setIsError(true);
            snackbar.setOpen(true);
          }
        }}
      >
        <FormikStep label='Team Details'>
          <Card
            elevation={4}
            sx={{
              borderRadius: '16px',
              backgroundColor: '#d7e9f7',
              overflow: 'hidden',
              margin: 'auto',
              width: '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 20px',
                fontSize: '1.5rem',
                width: '100%',
                backgroundColor: '#222944',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Enter Team Details
            </Typography>

            <Divider sx={{ marginBottom: '20px' }} />

            <Grid
              spacing={3}
              container
              sx={{
                padding: '12px',
                paddingTop: '12px',
                // marginLeft: '-12px',
              }}
              alignItems='center'
              justifyContent={'center'}
            >
              <Grid item xs={12} sm={10}>
                <Field
                  name={`team_name`}
                  label={'Enter Team name'}
                  as={CustomTextField}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`count`}
                  label={'No. of team members'}
                  items={[3, 4, 5]}
                  as={CustomDropDown}
                />
              </Grid>
            </Grid>
            <Box m={2} />
          </Card>
        </FormikStep>

        <FormikStep label='Team Members Details'>
          <Card
            elevation={5}
            sx={{
              borderRadius: '16px',
              backgroundColor: '#222944',
              overflow: 'hidden',
              margin: 'auto',
              width: '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 20px',
                fontSize: '1.5rem',
                width: '100%',
                backgroundColor: '#222944',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Enter Team Member's Details
            </Typography>

            <Divider
              sx={{
                marginBottom: '20px',
                // width: '100%',
              }}
            />

            <Box m={2} />
            {[...Array(count)].map((_, index) => (
              <Card
                elevation={4}
                sx={{
                  borderRadius: '16px',
                  backgroundColor: '#d7e9f7',
                  //   overflow: 'hidden',
                  margin: 'auto',
                  marginTop: '30px',
                  paddingBottom: '20px',
                  width: '80%', //90% in smaller devices.
                }}
              >
                <Grid
                  spacing={3}
                  key={index}
                  container
                  sx={{
                    // padding: '32px',
                    paddingTop: '42px',
                  }}
                  alignItems='center'
                  justifyContent={'center'}
                >
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                  >
                    {index === 0
                      ? 'Enter Team Leader Details'
                      : `Enter Member ${index + 1} Details`}
                  </Typography>
                  <Divider sx={{ width: '100%' }} />
                  <Grid item xs={12} sm={10}>
                    <Field
                      name={`player${index + 1}.name`}
                      label={
                        index === 0
                          ? 'Enter Team Leader name'
                          : `Enter Member ${index + 1} name`
                      }
                      as={CustomTextField}
                    />
                    <Field
                      name={`player${index + 1}.college`}
                      label={`College name`}
                      as={CustomTextField}
                    />
                    <Field
                      name={`player${index + 1}.email`}
                      label={'Email Address'}
                      as={CustomTextField}
                    />
                    <Field
                      name={`player${index + 1}.phone`}
                      label={'Phone Number'}
                      type={'number'}
                      as={CustomTextField}
                    />
                    <Field
                      name={`player${index + 1}.gender`}
                      label={'Gender'}
                      items={['Male', 'Female']}
                      as={CustomDropDown}
                    />
                    <Field
                      name={`player${index + 1}.github_url`}
                      label={'GitHub URL'}
                      as={CustomTextField}
                    />
                  </Grid>
                </Grid>
              </Card>
            ))}

            <Box m={4} />
          </Card>
        </FormikStep>

        <FormikStep label='Domain and abstract'>
          <Card
            sx={{
              borderRadius: '16px',
              backgroundColor: '#d7e9f7',
              overflow: 'hidden',
              margin: 'auto',
              width: '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 20px',
                fontSize: '1.5rem',
                width: '100%',
                backgroundColor: '#222944',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Domain and abstract
            </Typography>

            <Divider sx={{ marginBottom: '20px' }} />

            <Grid
              spacing={3}
              container
              sx={{
                padding: '12px',
                paddingTop: '12px',
                // marginLeft: '-12px',
              }}
              alignItems='center'
              justifyContent={'center'}
            >
              <Grid item xs={12} sm={10}>
                <Field
                  name={`domain`}
                  label={'Select domain'}
                  items={['one', 'two', 'three']}
                  as={CustomDropDown}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`prob_st`}
                  label={'Enter Problem Statement'}
                  as={CustomTextField}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`abstract`}
                  label={'Enter your abstract'}
                  multiline={true}
                  rows={20}
                  as={CustomTextField}
                />
              </Grid>
            </Grid>
            <Box m={4} />
          </Card>
        </FormikStep>
      </FormikStepper>
      <CustomSnackbar
        open={snackbar.open}
        handleClose={() => snackbar.setOpen(false)}
        message={snackbar.message ?? 'Server error'}
        severity='error'
      />
    </div>
  );
};

const CustomTextField = (props) => {
  return (
    <TextField
      variant='outlined'
      required={true}
      InputProps={{
        style: {
          borderRadius: '16px',
        },
      }}
      style={{
        paddingBottom: '20px',
        width: '100%',
      }}
      {...props}
      className={props.padding}
    />
  );
};

const CustomDropDown = (props) => {
  return (
    <>
      <TextField
        select
        required={true}
        defaultValue=''
        {...props}
        variant='outlined'
        InputProps={{
          style: {
            borderRadius: '16px',
          },
        }}
        sx={{
          borderRadius: '16px',
          //   marginTop: '20px',
          marginBottom: '20px',
          //   marginLeft: '20px',
          width: '100%',
        }}
      >
        {props?.items?.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

function FormikStep({ children }) {
  return <>{children}</>;
}

function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [openDialog, setOpenDialog] = useState(false);
  const setCount = teamCountStore((state) => state.setCount);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      //   validationSchema={currentChild.props.validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount={false}
      onSubmit={async (values, helpers) => {
        console.log(values);
        if (step === 0) {
          //   console.log('here');
          if (values?.count) {
            setCount(values?.count);
          }
        }
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setStep(0);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting, submitForm }) => (
        <Form>
          <Stepper alternativeLabel activeStep={step} sx={{ marginBottom: 3 }}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              overflow: 'hidden',
              marginBottom: '50px',
              marginTop: 3,
            }}
          >
            {step > 0 ? (
              <Button
                variant='outlined'
                sx={{ borderRadius: '12px' }}
                disabled={isSubmitting}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            ) : null}
            <Button
              variant='outlined'
              sx={{ borderRadius: '12px' }}
              disabled={isSubmitting}
              type={!isLastStep() ? 'submit' : undefined}
              onClick={() => {
                if (isLastStep()) {
                  setOpenDialog(true);
                }
              }}
            >
              {isLastStep() ? 'Submit' : 'Next'}
            </Button>
          </Box>
          <CustomDialog
            dialogOpen={openDialog}
            handleClose={() => {
              setOpenDialog(false);
            }}
            isSubmitting={isSubmitting}
            submitForm={submitForm}
          />
        </Form>
      )}
    </Formik>
  );
}

export default RegisterView;
