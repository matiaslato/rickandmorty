import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../../asset/welcome.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Welcome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <img src={img} atl="logo" height="300px" width="350px" />
        <Typography variant="h3" noWrap color="textPrimary">
          WELCOME TO THE FAN APP
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
