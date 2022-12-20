import NewAccountHeader from '../Components/NewAccount/NewAccountHeader';
import React, { useState } from 'react';
import { View , Text , TextInput , TouchableOpacity , Image , StyleSheet} from 'react-native';
import {auth, db, firebase} from '../FireBase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function LoginPage({navigation}){

    return (
        <View style = {styles.create_account_page_view}>
            <NewAccountHeader></NewAccountHeader>
            <NewAccountBody/>
        </View>
    );
}


export default function NewAccountBody({navigation}){

    const [get_username,set_username] = useState("");
    const [get_password,set_password] = useState("");
    const [get_email,set_email]=useState("");
    const [get_icon_mode,set_icon_mode] = useState("https://cdn-icons-png.flaticon.com/512/6405/6405909.png");
    const [get_password_mode,set_password_mode] = useState(true);

    function changeIcon(){
        if(get_icon_mode == "https://cdn-icons-png.flaticon.com/512/6405/6405909.png"){
            set_icon_mode("https://t4.ftcdn.net/jpg/05/00/02/19/240_F_500021997_aVvUGsnZY9O2WPBJclPzvVsWW3shsJ2X.jpg");
            set_password_mode(false);
        }else{
            set_icon_mode("https://cdn-icons-png.flaticon.com/512/6405/6405909.png");
            set_password_mode(true);
        }
    }

    async function onPressCreatAccount(){

        if(get_username.length > 0 && get_password.length>0){
            console.log("Username : "+get_username);
            console.log("Password : "+get_password);
            console.log("Email: "+get_email)
            try{
            await createUserWithEmailAndPassword(auth,get_email,get_password).then(userfield=>{console.log(userfield.user)})
            
            console.log("User LoggedIn")
        }catch(error)
        {
            console.log(error.response)
        }
        }
        set_username("");
        set_password("");
        set_email("");
        const docref = await db.collection('Users').doc(get_username)
        docref.set(
    
            {
                'email':get_email,
                'metamask_id':'',
    
            },{merge:true}
        )
        console.log("Done")
        navigation.navigate('Home')
    }

    return (
        <View>
             <NewAccountHeader></NewAccountHeader>
        <View style = {styles.new_account_page_body}>

            <View>
                <View style = {styles.create_new_account_text}>
                    <Text style = {{fontSize : 20}}>CREATE NEW ACCOUNT</Text>
                </View>
                <View style = {styles.username_field_with_condition_container}>
                <View style  = {styles.username_with_condition}>
                        <TextInput style = {styles.username_field_text} 
                        placeholder = "Username" 
                        onChangeText = {(value)=> {set_username(value)}}
                        value = {get_username}/>
                    </View>
                    <Text style = {styles.hint_text}>
                            username consists of lowercase characters and underscore and number for 1-9
                    </Text>
                
                </View>
                <View>
                <View style = {styles.username_field_with_condition_container}>

                <View style  = {styles.username_with_condition}>
                        <TextInput style = {styles.username_field_text} 
                        placeholder = "Email" 
                        onChangeText = {(value)=> {set_email(value)}}
                        value = {get_email}/>
                    </View>
                </View>
                </View>

                <View style = {styles.password_field_container}>
                    <TextInput style = {styles.password_field_text} placeholder = "Password" 
                    secureTextEntry = {get_password_mode} onChangeText = {(value) => {set_password(value)}}
                    value = {get_password} />
                    <TouchableOpacity onPress={changeIcon}>
                        <Image style = {styles.eye_icon} source = {{uri : get_icon_mode}}/>
                    </TouchableOpacity>
                </View>
          </View>
        
            <View style = {styles.forgot_button_container}>
                    <TouchableOpacity style = {styles.forgot_button}>
                        <Text style = {{color  : "rgba(21, 117, 231, 1)" , fontSize : 14}}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>
            </View>
            <View style = {{marginTop: 90}}>
                
                <View style = {styles.forgot_button_container}>
                    <TouchableOpacity style = {styles.create_account_buttton} onPress = {onPressCreatAccount}>
                        <Text style = {{color : "rgba(21, 117, 231, 1)" , fontSize : 14}}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>

    );
}



const styles = StyleSheet.create({

    create_account_page_view : {
        flex : 1,
    },
    create_new_account_text : {
        paddingVertical : 50,
        alignItems  :"center",
    },

    username_field_with_condition_container : {
        marginLeft : 10,
        marginRight : 50,
        marginVertical  : 20,
        
        justifyContent : "space-between",
        borderRadius:9,
    
        
        
    },

    username_field_text : {
        padding : 10,
       fontSize  : 20,
        borderColor : 'rgba(0,0,0,0.15)',
        borderWidth : 1,
        borderWidth : 1,
        borderRadius : 6,
        borderColor : 'rgba(0,0,0,0.15)',
    },

    password_field_container : {

        marginLeft : 10,
        marginRight : 50,
        marginVertical  : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        borderWidth : 1,
        borderRadius : 6,
        borderColor : 'rgba(0,0,0,0.15)',
        //backgroundColor : "red",


    },

    password_field_text  : {
        padding : 10,
       fontSize  : 20,
       
        //borderColor : 'rgba(0,0,0,0.15)',
        //borderWidth : 1,
        //borderWidth : 1,
        //borderRadius : 6,
        //borderColor : 'rgba(0,0,0,0.15)',
    },

    hint_text : {
        fontSize : 14,
        paddingLeft : 10,
    },

    forgot_button_container : {
        flex : 1 ,  
        justifyContent : "center" , 
        alignItems : "flex-end",
        paddingRight : 20,
        marginTop:10,
    },

   forgot_button : {

        width : 179,
        height : 36,
        justifyContent : "center",
        alignItems : "center",
        marginBottom : 25,
        },

    create_account_buttton : {
        width : 179,
        height : 36,
        marginTop : 25,
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 1,
        borderRadius : 5,
        borderColor : 'rgba(0,0,0,0.15)',
        shadowColor : "black",
        shadowOffset : {width : 1.5,height : 1.5},
        shadowOpacity : 0.15,
        shadowRadius : 10,
    },

   password_mode_icon : {
        width  : 48,
        height  : 48,
        margin : "auto",
    },

    username_with_condition : {
        padding : 10,
        
    },

eye_icon : {

    width : 45,
    height : 45,

},
input:
{
    marginLeft : 15,
    marginTop:20,
  
   
    borderWidth : 1,
    borderRadius : 6,
    borderColor : 'rgba(0,0,0,0.15)',

  height:45,
  width:320,
  padding:10,
  borderRadius:9,
  fontSize:20,
  

},

    
});

