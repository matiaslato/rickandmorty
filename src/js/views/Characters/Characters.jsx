import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCaracters,
  getCaractersChangePage,
} from '../../core/Characters/action';

import Box from '@material-ui/core/Box';
import SearchBar from './components/SearchBar';
import Steper from './components/Steper';
import ListCard from './components/ListCards';
import theme from 'js/theme';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  steper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
});

const Characters = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    page: 1,
    filterName: '',
    gender: '',
  });

  const paginationCharactes = useSelector(
    (state) => state.characterReducer.info
  );

  // useEffect(() => {

  // }, []);

  const handleChange = (event) => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangePage = async (event, value) => {
    setPayload({
      ...payload,
      page: value,
    });
    dispatch(getCaractersChangePage({ ...payload, page: value }));
  };

  const handleSearch = () => {
    dispatch(getCaracters(payload));
    setPayload({
      ...payload,
      page: 1,
    });
  };

  return (
    <Fragment>
      <Box className={classes.root}>
        <SearchBar
          filterName={payload.filterName}
          gender={payload.gender}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      </Box>
      <Box className={classes.steper}>
        <Steper
          paginationCharactes={paginationCharactes}
          page={payload.page}
          handleChange={handleChangePage}
          className={classes.steper}
        />
      </Box>
      <Box className={classes.root}>
        <ListCard />
      </Box>
    </Fragment>
  );
};

export default Characters;
