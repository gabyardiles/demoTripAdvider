import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../../styles/styles';
import { withNavigation } from 'react-navigation';


function UserGuest(props) {

    console.log(props);
    const { navigation } = props;

    return(
        <ScrollView style= {styles.viewBody} centerContent= { true }>
            <Image
            source={ require('../../../assets/img/userGuest.jpg')}
            style= { styles.image}
            resizeMode='contain'
            />
            
            <Text style= { styles.title }>
                Consulta tu perfil de Restaurantes
            </Text>
            <Text style={ styles.description }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum a lectus sed ullamcorper. Curabitur blandit, ex eu pharetra finibus, nibh diam pretium ipsum, vitae volutpat nunc neque eget sapien. Nunc condimentum, nisl ut porta tincidunt, mauris sem blandit lectus, in euismod turpis justo eu nisi. Vestibulum tristique nibh eget magna blandit posuere. Sed venenatis, nunc in luctus scelerisque, tortor purus ullamcorper libero, ut pellentesque mauris ligula ac quam. Suspendisse rhoncus accumsan semper.
            </Text>
            <View style={ styles.viewBotton }>
                <Button
                    buttonStyle= { styles.btnStyle }
                    containerStyle= { styles.containerStayle}
                    title= 'Ver perfil'
                    onPress= { () => navigation.navigate('LoginStack') }
                />
            </View>
        </ScrollView>
        );
}

export default  withNavigation(UserGuest);
