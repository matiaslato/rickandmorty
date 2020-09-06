import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'noWrap',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
    heigth: 80,
    backgroundColor: theme.palette.white,
    height: '70%',
  },
  input: {
    margin: theme.spacing(1),
    width: 150,
    heigth: 80,
    backgroundColor: theme.palette.white,
    height: '70%',
  },
  buttonSearch: {
    width: 150,
  },
}));

const SearchBar = ({ filterName, gender, handleChange, handleSearch }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
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
      </Box>
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
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
      </Box>
      <Box>
        <Button
          className={classes.buttonSearch}
          variant="contained"
          color="secondary"
          onClick={handleSearch}
        >
          Find
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
