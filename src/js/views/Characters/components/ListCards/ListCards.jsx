import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PrityCard from '../PrityCards';
import LoadingCard from '../LoadingCard';

const ListCards = () => {
  let Cards;
  let fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const charactersList = useSelector((state) => state.characterReducer.results);
  const loading = useSelector((state) => state.characterReducer.loading);

  if (loading) {
    Cards = fakeArray.map((CardData, index) => {
      return (
        <div key={index}>
          <LoadingCard />
        </div>
      );
    });
  } else if (charactersList && !loading) {
    Cards = charactersList.map((CardData) => {
      return (
        <div key={`${CardData.id}-${CardData.name}-${CardData.created}-`}>
          <PrityCard CardData={CardData} />
        </div>
      );
    });
  }

  return <Fragment>{Cards}</Fragment>;
};

export default ListCards;
