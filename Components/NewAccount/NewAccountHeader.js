//import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import NewAccountBody from './NewAccountBody';

export default function NewAccountHeader(){

    return (
        <View style = {styles.header_text_container}>
            <Text style = {{fontSize : 20}}>NShades</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header_text_container : {
        padding : 15,
        shadowColor : "black",
        shadowOffset : {width  : 1.5 , height : 1.5},
        shadowOpacity : 0.15,
        //shadowRadius : 10,
    },
});
