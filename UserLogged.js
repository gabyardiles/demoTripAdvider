import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'; 
import * as Firebase from 'firebase';


export default class UserLogged extends React.Component {

    render(){
        return(
            <View>
                <Text>UserLogged....</Text>
                <Button
                title = 'Cerrar sesión'
                onPress = { () => { Firebase.auth().signOut()}}
                />
            </View>
            );
    };
}