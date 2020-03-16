import {createStackNavigator} from 'react-navigation-stack';
import TopRestaurant from '../screens/TopRestaurants';

const  TopRestaurantStack = createStackNavigator({
    TopRestaurant: {
        screen: TopRestaurant,
        navigationOptions: () => ({
            title: 'Ranking',  
        })
    }
});

export default TopRestaurantStack;