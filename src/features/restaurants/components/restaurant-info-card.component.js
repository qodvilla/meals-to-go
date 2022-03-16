import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionRight,
  Ratings,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Ratings>
            {ratingArray.map((nothing, i) => (
              <SvgXml key={i} xml={star} width="25" height="25" />
            ))}
          </Ratings>
          <SectionRight>
            {isClosedTemporarily && (
              <Spacer size="medium" position="right">
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </Spacer>
            )}
            <Spacer size="medium" position="right">
              {isOpenNow && (
                <SvgXml key={0} xml={open} width="25" height="25" />
              )}
            </Spacer>
            <Icon source={{ uri: icon }} />
          </SectionRight>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
