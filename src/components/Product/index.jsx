import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Description,
  ImageArea,
  ImageProduct,
  Line,
  Logo,
  Price,
  Sales,
  SalesArea,
  Stars,
  Title,
} from "./styles";

function Product({ image, title, note, sales, price }) {
  return (
    <Container>
      <ImageArea>
        <ImageProduct source={image} />
        <Logo>
          <Icon name="heart-o" size={16} color="#ffffff" />
        </Logo>
      </ImageArea>
      <Title>{title}</Title>
      <Description>
        <Stars>
          <Icon name="star-half-full" size={20} color="#181a20" />
          {note}
        </Stars>
        <Line />
        <SalesArea>
          <Sales>{sales} vendidos</Sales>
        </SalesArea>
      </Description>
      <Price>R$ {price}</Price>
    </Container>
  );
}

export default Product;
