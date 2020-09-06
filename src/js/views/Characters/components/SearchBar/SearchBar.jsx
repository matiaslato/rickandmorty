import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    border: 1,
    //backgroundColor: theme.palette.primary.light,
    width: '80%',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
    backgroundColor: theme.palette.white,
    height: '70%',
  },
  input: {
    margin: theme.spacing(1),
    width: 150,
    backgroundColor: theme.palette.white,
    height: '70%',
  },
}));

const SearchBar = ({ filterName, gender, handleChange, handleSearch }) => {
  const classes = useStyles();

  return (
    //<Paper elevation={3}>
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        id="filterName"
        name="filterName"
        label="Search By name"
        variant="outlined"
        color="secondary"
        value={filterName}
        onChange={handleChange}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          name="gender"
          value={gender}
          onChange={handleChange}
          color="secondary"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Genderless">Genderless</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="secondary" onClick={handleSearch}>
        Find
      </Button>
    </Box>
    // </Paper>
  );
};

export default SearchBar;
