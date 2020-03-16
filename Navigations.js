import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import screen
import RestaurantsStack  from './RestaurantsStack';
import TopRestaurantStack from './TopRestaurantStack';
import SearchStack from './SearchStack';
import MyAccountStack from './MyAccountStack';


const navigationStack = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsStack,
        navigationOptions: () => ({
            tabBarLabel: 'Restaurantes',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type = 'material-community'
                    name =  'compass-outline'
                    size = { 22 }
                    color = {tintColor}
                />
            )
        })
    },
    TopRestaurant: {
        screen: TopRestaurantStack,
        navigationOptions: () => ({
            tabBarLabel: 'Ranking',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type = 'material-community'
                    name = 'star-outline'
                    size = { 22 }
                    color = {tintColor}
                />
            )
        })
    },
    SearchRestaurant: {
        screen: SearchStack,
        navigationOptions: () => ({
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type = 'material-community'
                    name = 'magnify'
                    size = { 22 }
                    color = {tintColor}
                />
            )
        })
    },
    MyAccount: {
        screen: MyAccountStack,
        navigationOptions: () => ({
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type = 'material-community'
                    name = 'home-outline'
                    size = { 22 }
                    color = {tintColor}
                />
            )
        })
    }
}
);

export default createAppContainer(navigationStack)