import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.Screen name="RestaurantsStackScreen" component={RestaurantsScreen}/>
            <RestaurantStack.Screen name="RestaurantDetails" component={() => (<Text>Hello, Restaurant Details Screen?</Text>)}/>
        </RestaurantStack.Navigator>
    )
}