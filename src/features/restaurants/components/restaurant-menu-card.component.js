import React from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

export const RestaurantMenuCard = () => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  return (
    <>
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        left={props => <List.Icon {...props} icon="coffee" 
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={props => <List.Icon {...props} icon="food" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Dinner"
        left={props => <List.Icon {...props} icon="food-croissant" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={props => <List.Icon {...props} icon="beer" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </ScrollView>
    </>
  );
};
