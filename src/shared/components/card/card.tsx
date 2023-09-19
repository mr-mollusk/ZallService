import { Card as ChakraCard, CardBody } from '@chakra-ui/react';
import { ICard } from './card.types';

const Card = ({ name, imgSrc, capacity, square, price, address }: ICard) => {
  return (
    <ChakraCard>
      <CardBody>
        <h2>{name}</h2>
        {imgSrc && <img src={imgSrc} alt={name} />}
        <p>Capacity: {capacity}</p>
        <p>Square: {square}</p>
        <p>Price: {price}</p>
        <p>Address: {address}</p>
      </CardBody>
    </ChakraCard>
  );
};

export { Card };
