import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import PrityCard from './components/PrityCards';
import SearchBar from './components/SearchBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Characters = ({ data }) => {
  const classes = useStyles();
  console.log(data);

  const Cards = data.map((CardData) => {
    return (
      <div key={`${CardData.id}-${CardData.name}`}>
        <PrityCard CardData={CardData} />
      </div>
    );
  });

  return (
    <Fragment>
      <Box className={classes.root}>
        <SearchBar />
        {Cards}
      </Box>
    </Fragment>
  );
};

export default Characters;
