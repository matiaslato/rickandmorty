import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    //backgroundColor: theme.palette.primary.light,
    width: '80%',
  },
}));

const Steper = ({ paginationCharactes, page, handleChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Total: {paginationCharactes.count}</Typography>
      <Pagination
        id="page"
        name="page"
        count={paginationCharactes.pages}
        page={page}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Steper;
