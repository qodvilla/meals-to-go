import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
`;
export const Info = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;
export const Ratings = styled.View`
  flex-direction: row;
`;
export const RestaurantCard = styled(Card)`
  margin-bottom: ${({theme}) => theme.space[3]}
`;
export const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;
export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;
export const Section = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  align-items: center;
`;
export const SectionRight = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
