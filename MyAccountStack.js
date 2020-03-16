import {createStackNavigator} from 'react-navigation-stack';
import MyAccount from '../screens/Account/MyAccount'
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';

const  MyAccountStack = createStackNavigator({
    MyAccountStack: {
        screen: MyAccount,
        navigationOptions: () => ({
            title: 'Mi cuenta',  
        })
    },
    LoginStack: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login',  
        })
    },
    RegisterStack: {
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: 'Registrarse',  
        })
    }
});

export default MyAccountStack;