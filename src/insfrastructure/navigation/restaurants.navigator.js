import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen';
import { RestaurantDetails } from '../../features/restaurants/screens/restaurants-details-screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.Screen name="RestaurantsStackScreen" component={RestaurantsScreen}/>
            <RestaurantStack.Screen name="RestaurantDetails" component={RestaurantDetails}/>
        </RestaurantStack.Navigator>
    )
}