import React, { useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Account/RegisterForm'
import Toast from 'react-native-easy-toast';



function Register() {
    const toastRef = useRef();
    return (
        <KeyboardAwareScrollView>
            <View style={ styles.viewLogo }>
                <Image
                source={ require('../../../assets/img/Logo.png')}
                style= { styles.image}
                resizeMode='contain'
                />
            </View>
            <View style={ styles.viewForm }>
            <RegisterForm toastRef={ toastRef }/>
            </View>
            <Toast ref= { toastRef } position='center' opacity={ 0.5 } />
        </KeyboardAwareScrollView>
    );
}

export default withNavigation(Register);