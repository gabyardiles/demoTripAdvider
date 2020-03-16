import React, { useRef } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from '../../styles/styles';
import { withNavigation } from 'react-navigation';
import LoginForm from '../../components/Account/LoginForm';
import LoginWithFacebook from '../../components/Account/LoginFacebook';
import Toast from 'react-native-easy-toast';


function Login(props) {

    const { navigation } = props;
    const toastRef = useRef();

    return (
        <ScrollView>
            <View style={ styles.viewLogo }>
                <Image
                source={ require('../../../assets/img/Logo.png')}
                style= { styles.image}
                resizeMode='contain'
                />
            </View>
            <View style={ styles.viewContainerLogin }>
                <LoginForm toastRef={toastRef} />
                <CreateAccount navigationRegister={navigation}/>
            </View>
            <Divider style={ styles.dividerLogin }/>
            <View style={ styles.viewContainerLogin }>
                <LoginWithFacebook  toastRef={toastRef} navigationLoginFacebook={navigation}/>
            </View>
            <Toast ref= { toastRef } position='center' opacity={ 0.5 } />
        </ScrollView>
    );
}

function CreateAccount(props) {
    const { navigationRegister } = props;

    return (
        <Text style={ styles.textRegister}>
            ¿Aún no tenes cuenta? {" "}
            <Text
            style={ styles.btnRegister}
            onPress={ () => navigationRegister.navigate('RegisterStack') }
            >
                Registrarse
            </Text>
        </Text>
    );
}
export default withNavigation(Login);