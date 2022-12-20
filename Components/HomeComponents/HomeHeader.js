import { Divider } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './Post';
export default function HomeHeader({navigation}){
    

    return (
        <SafeAreaView style={{}}>
        <View>
            
        <View style = {styles.header_text_container}>
            <Text style = {{fontSize : 22,fontWeight:'700'}}>NShades</Text>
            <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.magnifyContainer}>
                <Image style = {{width : 24 , height : 24}} 
                source = {{uri:"https://cdn-icons-png.flaticon.com/512/149/149852.png"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Upload')}} style = {[styles.magnifyContainer,{marginLeft : 15}]} >
                <Image style = {{width : 35 , height : 35}} 
                source = {{uri:"https://cdn-icons-png.flaticon.com/512/3161/3161837.png"}}/>
            </TouchableOpacity>
            </View>
        </View>
        <Divider width={1} orientation='vertical'/>
        
        </View>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    header_text_container : {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,



        padding : 15,
        shadowColor : "black",
        backgroundColor : "white",
        shadowOffset : {width  : 1.5 , height : 1.5},
        shadowOpacity : 0.15,
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : "space-between",
        //shadowRadius : 10,
    },

    magnifyContainer : {
        marginRight : 15,
        justifyContent:'center',
        alignItems : 'center'},

    
});
