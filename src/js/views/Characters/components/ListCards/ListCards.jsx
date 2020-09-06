import React, { Fragment } from 'react';
import PrityCard from '../PrityCards';
import { useSelector } from 'react-redux';

const ListCards = () => {
  let Cards;

  const charactersList = useSelector((state) => state.characterReducer.results);

  if (charactersList) {
    Cards = charactersList.map((CardData) => {
      return (
        <div key={`${CardData.id}-${CardData.name}`}>
          <PrityCard CardData={CardData} />
        </div>
      );
    });
  }

  console.log(charactersList);

  return <Fragment>{Cards}</Fragment>;
};

export default ListCards;
