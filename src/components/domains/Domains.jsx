import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';

import { Domain } from '../../Module/General';

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    padding: theme.spacing(2),
    border: '1px solid #F5F5F5',
    borderRadius: '16px',
    transition: 'box-shadow .2s ease,border .2s ease',
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 8%) 0px 25px 25px',
    },
  },
}));

const Domains = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      style={{ padding: '20px', paddingBottom: '50px' }}
      alignItems='center'
    >
      {Domain.map((item, index) => (
        <Grid key={index} item xs={12} sx={6} md={4}>
          <Card elevation={0} style={{}} className={classes.cardStyle}>
            <h3 style={{ padding: 20 }}>{item}</h3>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Domains;
