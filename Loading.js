import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from '../styles/styles';

export default function Loading(props)  {
    const { isHidden, text } = props;

    return(
        <Overlay

        isVisible = { isHidden }
        windowBackgroundColor = 'rgb(0,0,0, .5)'
        overlayBackgroundColor = 'transparent'
        overlayStyle = { styles.overlayStyle }
        >

        <View style = {styles.view}>
            <ActivityIndicator size= 'large' color='#00a680'/>
            {text && (<Text style = {styles.textLoding}>{ text }</Text>)}
        </View>   
        </Overlay>
    )
}