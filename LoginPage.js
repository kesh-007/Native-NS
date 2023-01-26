import {SafeAreaView} from 'react-native-safe-area-context'

import { useState,useEffect } from "react";
import { TouchableOpacity,Text, View,StyleSheet ,Image, } from "react-native";
import { auth,provider } from "./Firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function LoginPage() {
    const [user, setuser] = useState(null)
    let displayName1=null;
    let email1=null;
  
    function Googlesignin()
    {
        signInWithPopup(auth,provider)
        .then((res)=>{console.log(res)})
        .catch((error)=>console.log(error))

    }

    return (

        <View style={{backgroundColor:'white'}}>
            
            <View style={{marginTop:200}}>
                <Text style={{fontSize:36,marginLeft:15,marginBottom:8}}>Welcome!</Text>
                <Text style={{fontSize:18,marginLeft:16,fontWeight:'600'}}>Hey there!!!</Text>
                </View>          
                <View  style={{height:59,backgroundColor:'rgba(0,0,0,0.76)',marginTop:40,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold'}}>Sign In </Text>
                    </View>      
                    <TouchableOpacity onPress={Googlesignin}>

                    <View style={{marginTop:55,marginLeft:10,marginRight:10,borderRadius:10,borderColor:'black',height:60,borderWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Image source={"https://cdn-icons-png.flaticon.com/128/104/104093.png"} style={{height:20,width:20}}/>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>  Sign In with Google</Text>

                        </View>     
                        </TouchableOpacity>
                        <Text style={{textAlign:'center',margin:10,color:'gray'}}>Login to post your NFTs</Text>  
             </View>
 
                    
    );
}