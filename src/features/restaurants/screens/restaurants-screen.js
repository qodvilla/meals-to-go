import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors } from '../../../utils/utils'
import { RestaurantInfo } from '../components/restaurant-info.component';


export const RestaurantsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar />
            </View>
            <View style={styles.RestaurantsList}>
                <RestaurantInfo />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16161a',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    search: {
        padding: 16
    },
    RestaurantsList: {
        flex: 1,
        padding: 16
    },
    RestaurantsListText: {
        color: colors.paragraph,
        fontWeight: 'bold'
    },
    headline: {
        color: colors.headline,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})












