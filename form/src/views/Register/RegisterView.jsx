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
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { teamCountStore } from 'stores/teamCountStore';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore/lite';
import { db } from 'db/firebaseapp';
import CustomDialog from 'common/CustomDialog';
import CustomSnackbar from 'common/CustomSnackbar';
import { snackBarStore } from 'stores/snackbarStore';
import Footer from 'common/Footer/footer';

const RegisterView = () => {
  const count = teamCountStore((state) => state.count);
  const snackbar = snackBarStore((state) => state);

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));

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
              marginTop: '20px',
              borderRadius: '16px',
              backgroundColor: '#d7e9f7',
              overflow: 'hidden',
              margin: 'auto',
              width: match ? '90%' : '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 0px',
                fontSize: '1.5rem',
                width: '100%',
                textAlign: 'center',
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
                  required={true}
                  as={CustomTextField}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`count`}
                  label={'No. of team members'}
                  items={[3, 4, 5]}
                  required={true}
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
              width: match ? '90%' : '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 0px',
                fontSize: '1.5rem',
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#222944',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Enter Team Member's Details
            </Typography>

            {/* <Divider
              sx={{
                marginBottom: '10px',
                // width: '100%',
              }}
            /> */}

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

                  width: match ? '90%' : '80%', //90% in smaller devices.
                }}
              >
                <Grid
                  spacing={3}
                  key={index}
                  container
                  sx={{
                    // padding: '32px',
                    paddingTop: '42px',
                    paddingLeft: match ? '20px' : undefined,
                    paddingRight: match ? '20px' : undefined,
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
                      required={true}
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
                      required={true}
                    />
                    <Field
                      name={`player${index + 1}.email`}
                      label={'Email Address'}
                      as={CustomTextField}
                      required={true}
                    />
                    <Field
                      name={`player${index + 1}.phone`}
                      label={'Phone Number'}
                      type={'number'}
                      required={true}
                      // to hide the stepper in the right and remove its functionality as it is not needed
                      step='0.01'
                      as={CustomTextField}
                    />
                    <Field
                      name={`player${index + 1}.gender`}
                      label={'Gender'}
                      required={true}
                      items={['Male', 'Female']}
                      as={CustomDropDown}
                    />
                    <Field
                      name={`player${index + 1}.yearOfStudy`}
                      label={'Year of Study'}
                      items={['I', 'II', 'III', 'IV']}
                      required={true}
                      as={CustomDropDown}
                    />
                    <Field
                      name={`player${index + 1}.github_url`}
                      label={'GitHub and Coding profiles (If any)'}
                      required={false}
                      multiline={true}
                      rows={5}
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
              width: match ? '90%' : '60%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                padding: '10px 0px',
                fontSize: '1.5rem',
                textAlign: 'center',
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
                  items={[
                    'Clean & Green Technology',
                    'Agriculture, FoodTech & Rural Development',
                    'Blockchain / FinanceTech',
                    'Fitness & Sports',
                    'MedTech / BioTech / HealthTech',
                    'Smart Education',
                  ]}
                  required={true}
                  as={CustomDropDown}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`prob_st`}
                  label={'Enter Problem Statement'}
                  required={true}
                  as={CustomTextField}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Field
                  name={`abstract`}
                  label={'Enter your abstract'}
                  multiline={true}
                  rows={match ? 15 : 20}
                  required={true}
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
      <Footer socials={true} />
    </div>
  );
};

const CustomTextField = (props) => {
  return (
    <TextField
      variant='outlined'
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
  const snackbar = snackBarStore((state) => state);

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
        if (step === 0) {
          try {
            const yahEntry = collection(db, 'yah_entry');

            const q = query(
              yahEntry,
              where('team_name', '==', `${values.team_name}`)
            );
            const querySnapshot = await getDocs(q);
            if (querySnapshot.docs.length === 1) {
              snackbar.setmessage(
                'This team name is taken by some other team. Come up with another name.'
              );
              snackbar.setIsError(true);
              snackbar.setOpen(true);
              return;
            }
          } catch (error) {
            snackbar.setmessage(
              'There is some error in adding your information. Please contact us immediately.'
            );
            snackbar.setIsError(true);
            snackbar.setOpen(true);
          }

          if (values?.count) {
            setCount(values?.count);
          }
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setStep(0);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }}
    >
      {({ isSubmitting, submitForm, values }) => (
        <Form>
          <Stepper alternativeLabel activeStep={step} sx={{ marginBottom: 4 }}>
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
                onClick={() => {
                  setStep((s) => s - 1);
                  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
              >
                Back
              </Button>
            ) : null}
            <Button
              variant='outlined'
              sx={{ borderRadius: '12px' }}
              disabled={isSubmitting}
              type={!isLastStep() ? 'submit' : undefined}
              onClick={async () => {
                if (isLastStep()) {
                  if (values.domain && values.prob_st && values.abstract)
                    setOpenDialog(true);
                  else {
                    snackbar.setmessage('Fill the form completely');
                    snackbar.setIsError(true);
                    snackbar.setOpen(true);
                  }
                }
              }}
            >
              {!isLastStep() && isSubmitting ? (
                <CircularProgress />
              ) : isLastStep() ? (
                'Submit'
              ) : (
                'Next'
              )}
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
          <CustomSnackbar
            open={snackbar.open}
            handleClose={() => snackbar.setOpen(false)}
            message={snackbar.message ?? 'Server error'}
            severity='error'
          />
        </Form>
      )}
    </Formik>
  );
}

export default RegisterView;
