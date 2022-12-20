import React from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import { ScrollView } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import {Divider} from 'react-native-elements'
//uri : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
function Storie(props){

  return (
    <View style = {{backgroundColor : "red",height : 100}}>
    </View>
  );
}
export default function ChatPage(){


  return (
    <SafeAreaView style={{flex:1}}>
    <View style = {styles.mainView}>
    <View style = {styles.header_text_container}>
            <Text style = {{fontSize : 22,fontWeight:'700'}}>NShades</Text>
            <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.magnifyContainer}>
                <Image style = {{width : 24 , height : 24}} 
                source = {{uri:"https://cdn-icons-png.flaticon.com/512/149/149852.png"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style = {[styles.magnifyContainer,{marginLeft : 15}]} >
                <Image style = {{width : 35 , height : 35}} 
                source = {{uri:"https://cdn-icons-png.flaticon.com/512/3161/3161837.png"}}/>
            </TouchableOpacity>
            </View>
        </View>
        <Divider width={1} orientation='vertical'/>

      <View style = {styles.usernameContainer}>
        <Text style = {{fontSize : 18}}>User-Name</Text>
      </View>
      <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
      <View style = {{flex : 0.2}}>
        <ScrollView  style = {styles.stories} horizontal showsHorizontalScrollIndicator = {false}>
          <Storie/>
        </ScrollView>
        </View>
      <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
      <View style = {styles.chatExtra}>
        <TouchableOpacity>
            <Text style = {{ fontSize : 16,color : 'rgba(21,117,231,100)'}}>New Group</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style = {{  fontSize : 16,color : 'rgba(21,117,231,100)'}}>Requests</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style = {styles.contactContainer}>
        </View>
      </ScrollView>
    </View>
    
</SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mainView : {
    flex : 1,
    backgroundColor : 'white',
  },

  header : {
    padding : 15,
    shadowOffset : {width  : 1.5 , height : 1.5},
    shadowOpacity : 0.15,
  },

  stories : {
    paddingLeft : 15,
    paddingVertical : 10,
  },

  usernameContainer: {
    padding : 15,
  },

  chatExtra : {
    paddingVertical : 10 , 
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
  },

  badgeIcon : {
    height : 25,
    width : 25,
    backgroundColor : 'rgba(21,117,231,100)',
    borderRadius : 20,
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    top : 50,
    left : 50,
  },

  badgeIconText : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 20,
    justifyContent : 'center',
    alignItems : 'center',
  },

  contactContainer : {

  },
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