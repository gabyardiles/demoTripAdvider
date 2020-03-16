import React, { useState } from 'react';
import { SocialIcon, View } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import { facebookConfigApi } from '../../utils/Social';
import Loading from '../Loading'


export default function LoginFacebook(props) {
    
    const { toastRef, navigationLoginFacebook } = props;
    const [ hideLoading, setHideLoading ] = useState(false);

    
    const Loginfacebook = async() => {
        try {
            setHideLoading(true);
            await Facebook.initializeAsync(facebookConfigApi.aplication_id);
            const {
              type,
              token,
            } = await Facebook.logInWithReadPermissionsAsync({
              permissions: facebookConfigApi.permissions,
            });
            if (type === 'success') {
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              const credential = firebase.auth.FacebookAuthProvider.credential(token);
            //   toastRef.current.show(`Hi ${(await response.json()).name}!`);
                await firebase
                .auth()
                .signInWithCredential(credential)
                .then(() => {
                    navigationLoginFacebook.navigate('MyAccountStack');
                })
                .catch( ({ message }) => {
                    toastRef.current.show(`Firebase Login Error: ${message}`);
                })
            } else if (type === 'cancel') {
              toastRef.current.show('Inicio de sesión cancelado');
            } else {
                toastRef.current.show('Error desconocido por favor reintente');
            }
          } catch ({ message }) {
            toastRef.current.show(`Facebook Login Error: ${message}`);
          }
          setHideLoading(false);
    }
    

    return (
    
        <>
            <SocialIcon
                title = 'Login con facebook'
                button
                type = 'facebook'
                onPress = { Loginfacebook }
            />
            <Loading isHidden={ hideLoading } text= 'Ingresando...'/>
        </>
    )

    
}