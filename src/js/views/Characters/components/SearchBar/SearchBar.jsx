import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 80,
    backgroundColor: theme.palette.primary.dark,
    width: '80%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return <Box className={classes.root}>asd</Box>;
};

export default SearchBar;
