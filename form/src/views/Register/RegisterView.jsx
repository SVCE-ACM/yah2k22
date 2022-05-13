import React, { useState } from 'react';
import {
  Card,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Grid,
  MenuItem,
} from '@mui/material';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { teamCountStore } from 'stores/teamCountStore';

const RegisterView = () => {
  const count = teamCountStore((state) => state.count);
  console.log(count);
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
        onSubmit={(values) => {
          console.log(values);
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
              width: '50%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                margin: '20px 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Enter Team Details
            </Typography>
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
            <Box m={4} />
          </Card>
        </FormikStep>

        <FormikStep label='Team Members Details'>
          <Card
            sx={{
              borderRadius: '16px',
              backgroundColor: '#d7e9f7',
              overflow: 'hidden',
              margin: 'auto',
              width: '50%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                margin: '20px 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Enter Team Member's Details
            </Typography>
            <Box m={2} />
            {[...Array(count)].map((_, index) => (
              <Grid
                spacing={3}
                key={index}
                container
                sx={{
                  padding: '12px',
                  paddingTop: '12px',
                }}
                alignItems='center'
                justifyContent={'center'}
              >
                {console.log(index)}
                <Typography>
                  {index === 0
                    ? 'Enter Team Leader Details'
                    : `Enter Member ${index + 1} Details`}
                </Typography>
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
              width: '50%', //90% in smaller devices.
            }}
          >
            <Typography
              sx={{
                margin: '20px 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Domain and abstract
            </Typography>
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
                  as={CustomTextField}
                />
              </Grid>
            </Grid>
            <Box m={4} />
          </Card>
        </FormikStep>
      </FormikStepper>
    </div>
  );
};

const CustomTextField = (props) => {
  return (
    <TextField
      variant='outlined'
      //   required={true}
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
        // required={true}
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
      {({ isSubmitting }) => (
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
                disabled={isSubmitting}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            ) : null}
            <Button disabled={isSubmitting} type='submit'>
              {isSubmitting ? (
                <CircularProgress />
              ) : isLastStep() ? (
                'Submit'
              ) : (
                'Next'
              )}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterView;
