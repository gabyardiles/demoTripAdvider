import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../../styles/styles';
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import * as Firebase from 'firebase';
import Loading from '../Loading';
import { withNavigation } from 'react-navigation';


function RegisterForm(props) {

    //PROPS
    const { toastRef, navigation } = props;

    // HIDE/SHOW PASSWORD
    const [ hidePassword, setHidePassword ] = useState(true);
    const [ hideRepetPassword, setRepetHidePassword ] = useState(true);
    
    // Save data form
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ RepetPassword, setRepetPassword ] = useState('');

    // VISIBLE LOADING
    const [ hideLoading, setHideLoading ] = useState(false);
    
    // ACTION REGISTER BUTTON
    const Register = async() => {
        setHideLoading(true);
        if (!email || !password || !RepetPassword) {
            toastRef.current.show('Todos los campos son obligatorios');
        } else {
            if (!validateEmail(email)) {
                toastRef.current.show('El email no es válido');
            } else {
                if (password !== RepetPassword) {
                    toastRef.current.show('Las contraseñas no coinciden, reinte por favor');
                } else {
                    await Firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password).then( () => {
                        navigation.navigate('MyAccountStack')


                    })
                    .catch( () => {
                        toastRef.current.show('Error al crear la cuenta, reintente más tarde');
                    })
                }
            }
        }
        setHideLoading(false);
    };

    return (
        <View style={ styles.formContainer }>
            <Input
            name="email"
            placeholder = 'Correo electrónico'
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
            name="password"
            placeholder = 'Contraseña'
            password = { true }
            secureTextEntry = { hidePassword }
            containerStyle = { styles.inputForm}
            onChange = { e => setPassword(e.nativeEvent.text) }
            rightIcon = {
                <Icon
                    type = 'material-community'
                    name = { hidePassword ? 'eye-outline' : 'eye-off-outline' }
                    iconStyle = { styles.iconForm }
                    onPress = { () => setHidePassword(!hidePassword)}
            />
            }
            />

            <Input
            name="RepetPassword"
            placeholder = 'Repetir contraseña'
            password = { true }
            secureTextEntry = { hideRepetPassword }
            containerStyle = { styles.inputForm }
            onChange = { e => setRepetPassword(e.nativeEvent.text) }
            rightIcon = {
                <Icon
                    type = 'material-community'
                    name = { hideRepetPassword ? 'eye-outline' : 'eye-off-outline' }
                    iconStyle = { styles.iconForm }
                    onPress = { () => setRepetHidePassword(!hideRepetPassword)}
            />
            }
            />

            <Button
            title = 'Unirse'
            containerStyle = {styles.btnContainerForm }
            buttonStyle = { styles.btnFormRegister }
            onPress = { Register }
            />
            <Loading isHidden={ hideLoading } text= 'Creando cuenta...'/>
        </View>
    )

}

export default withNavigation(RegisterForm);
