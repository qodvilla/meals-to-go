import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
`;

const Info = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const Ratings = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[2]}
  margin-bottom: ${(props) => props.theme.space[2]}
`;

const RestaurantCard = styled(Card)``;

const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = `Restaurant`,
    icon = ``,
    photos = [
      `https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1575`,
    ],
    address = `111 Solly Sachs House`,
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Ratings>
          {ratingArray.map(() => (
            <SvgXml xml={star} width="25" height="25" />
          ))}
        </Ratings>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
