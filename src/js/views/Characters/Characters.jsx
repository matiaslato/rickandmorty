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
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
        <Steper
          paginationCharactes={paginationCharactes}
          page={payload.page}
          handleChange={handleChangePage}
        />
        <ListCard />
      </Box>
    </Fragment>
  );
};

export default Characters;
