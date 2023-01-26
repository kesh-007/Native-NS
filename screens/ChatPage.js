import React ,{useRef,useState}from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import { ScrollView } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import {Divider} from 'react-native-elements'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {auth,db,provider} from '../Firebase/firebase'
import '../ChatPage.css'

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
   
    <ChatRoom/>
    
</SafeAreaView>
  );
}



function ChatRoom()
{
  const dummy = useRef()
  const messageRef = db.collection('messages')
  const query = messageRef.orderBy('createdAt').limit(20);
  const [messages] = useCollectionData(query,{idField:'id'})
  const [formvalue,setformvalue] = useState('')
  const sendMessage = async(e)=>
  {
    e.preventDefault()
    const {uid,photoURL} = auth.currentUser;
    await messageRef.add({
      text:formvalue,
      createdAt:new Date(),
      uid,
      photoURL,
    })
    
    setformvalue('')
    dummy.current.scrollIntoView({behaviour:'smooth'})
  }
  return(
    <div>
      <View style={{backgroundColor:'gray',height:50,marginBottom:10}}>
        <Text style={{textAlign:'center',fontSize:20}}>Chat Page</Text>
        </View>

      
        <main>
          <ScrollView>
      {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
      <div ref={dummy}></div>
      </ScrollView>
      </main>
      <form onSubmit={sendMessage}> 
        <input value={formvalue} onChange={(e)=>setformvalue(e.target.value)}/>
        <button type='submit'><Image source={'https://cdn-icons-png.flaticon.com/512/3682/3682321.png'} style={{height:30,width:30}}/></button>
      </form>
      <Text>Just Message</Text>

    </div>

  )
}
function ChatMessage(props)
{
  const {text,uid,photoURL} = props.message;
  const messageClass = uid===auth.currentUser.uid?'sent':'received';


  return(
    <div className={`message ${messageClass}`}>
      <Image source={photoURL} style={{width:40,height:40,borderRadius:40,marginBottom:14,marginLeft:5}}/>
    <p>{text}</p>
    </div>
  )
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