import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../../styles/styles';
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import * as Firebase from 'firebase';
import Loading from '../Loading';
import { withNavigation } from 'react-navigation';


function LoginForm(props) {

    // PROPS
    const { toastRef, navigation } = props;

    // HIDE/SHOW PASSWORD
    const [ hidePassword, setHidePassword ] = useState(true);

    // Save data form
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // VISIBLE LOADING
    const [ hideLoading, setHideLoading ] = useState(false);


    const LoginUser = async () => {
        setHideLoading(true)
        if ( !email || !password ) {
            toastRef.current.show('Todos los campos son obligatorios');
        } else {
            if ( !validateEmail(email)) {
                toastRef.current.show('El email no es válido');
            } else {
                await Firebase
                        .auth()
                        .signInWithEmailAndPassword(email, password)
                        .then( () => {
                            navigation.navigate('MyAccountStack')
                        })
                        .catch( () => {
                            toastRef.current.show('Email o contraseña incorrecta');
                        })
            }
        }
        setHideLoading(false)
    }


    return (
        <View style={ styles.formContainer }>

            <Input
                name={ email }
                placeholder = 'Correo electronico'
                containerStyle = { styles.inputForm } 
                onChange = { e => setEmail(e.nativeEvent.text) }
                rightIcon = {
                    <Icon
                        type = 'material-community'
                        name = 'at'
                        iconStyle = { styles.iconForm }
                        onPress = { () => console.log('Email actualizado') }
                    />
                }
            />

            <Input
                name={ password }
                placeholder = 'Contraseña'
                password = { true }
                secureTextEntry = { hidePassword }
                containerStyle = { styles.inputForm}
                onChange = { e => setPassword(e.nativeEvent.text) }
                rightIcon = {
                    <Icon
                        type = 'material-community'
                        name = { hidePassword? 'eye-outline' : 'eye-off-outline'}
                        iconStyle = { styles.iconForm }
                        onPress = { () => setHidePassword(!hidePassword) }
                />
                }
            />

            <Button
                title = 'Iniciar sesión'
                containerStyle = {styles.btnContainerForm }
                buttonStyle = { styles.btnFormRegister }
                onPress = { LoginUser }
            />
            <Loading isHidden={ hideLoading } text= 'Ingresando...'/>
        </View>
    )
}

export default withNavigation(LoginForm);