import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text, Image } from 'react-native';
import { Spacer } from "../../../components/spacer/spacer.component";

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
`;

const RestaurantCard = styled(Card)``;

const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

const RatingsAndIsOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = `Restaurant`,
    icon = `https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png`,
    photos = [
      `https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1575`,
    ],
    address = `111 Solly Sachs House`,
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingsAndIsOpen>
          <Ratings>
            {ratingArray.map((nothing, i) => (
              <SvgXml key={i} xml={star} width="25" height="25" />
            ))}
          </Ratings>
          {isOpenNow && <SvgXml key={0} xml={open} width="25" height="25" />}
          <Spacer size="large" position="right">
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Spacer>
        </RatingsAndIsOpen>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
