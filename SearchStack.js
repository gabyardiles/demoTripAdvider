import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/Search';

const  SearchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: () => ({
            title: 'Buscar',  
        })
    }
});

export default SearchStack;