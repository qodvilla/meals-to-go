import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = `Some Restaurant`,
        icon = ``,
        photos = [`https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1575`],
        address = `111 Solly Sachs House`,
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant

    return (
        <InfoCard name={name} image={photos[0]}/>
    );
}

const InfoCard = ({name, image}) => (
  <Card>
    <Card.Content>
    </Card.Content>
    <Card.Cover style={styles.photo} source={{ uri: image }} />
    <Text style={styles.text}>{name}</Text>
  </Card>
);


const styles = StyleSheet.create({
    text: {
        margin: 8
    },
    photo: {
        margin: 8
    }
})
