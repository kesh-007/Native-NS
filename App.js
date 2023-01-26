import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './screens/HomPage';
import ChatPage from './screens/ChatPage';
import ProfilePage from './screens/ProfilePage';
import Trending from './screens/Trending';
import Notifications from './screens/Notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Upload from './screens/Upload';
import LoginPage from './LoginPage' 
import {auth,db,provider} from './FireBase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
export default function App() {
  const [user]= useAuthState(auth)

  return (
    <>    
    {user?
    <MainPage/>
    :
    <LoginPage/>
    }
    </>

    

  
  );
}

const MainPage = ()=>
(
  <NavigationContainer style={{backgroundcolor:'red'}}>
   <BottomTabs/>
    </NavigationContainer>
    

)
const Stack=createStackNavigator();

const HomeStack=()=>(
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="HomePage" component={HomePage}/>
    <Stack.Screen name="Upload" component={Upload}/>

  </Stack.Navigator>
)






function BottomTabs()
{
  
const Tab= createBottomTabNavigator();

  return(
    
    <Tab.Navigator
    screenOptions={{headerShown:false,  "tabBarShowLabel": false,  }}
    
       >
            <Tab.Screen name='Home' component={HomeStack} options={{
              tabBarIcon:({focused})=>(
                <View>
                  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828864.png'}}
                  resizeMode='contain'

                  style={{
                    height:28,width:25,
                    tintColor:focused?'black':"rgba(127, 127, 127, 1)",
                    

                  }}
                  
                  />
              
                </View>
              )
            }}/>
            <Tab.Screen name='Chat' component={ChatPage} options={{
              tabBarIcon:({focused})=>(
                <View>
                  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3416/3416046.png'}}
                  resizeMode='contain'

                  style={{
                    height:24,width:26,
                    tintColor:focused?'black':"rgba(127, 127, 127, 1)",
                    

                  }}
                  
                  />
              
                </View>
              )
            }}/>
            <Tab.Screen name='Profile' component={ProfilePage} options={{
              tabBarIcon:({focused})=>(
                <View>
                  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/747/747376.png'}}
                  resizeMode='contain'

                  style={{
                    height:49,width:49,
                    borderColor:'black',
                    borderWidth:1,
                    borderRadius:30,
                    tintColor:focused?'black':"rgba(127, 127, 127, 1)",
                    

                  }}
                  
                  />
              
                </View>
              )
            }}/>
            <Tab.Screen name='Trending' component={Trending} options={{
              tabBarIcon:({focused})=>(
                <View>
                  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/483/483675.png'}}
                  resizeMode='contain'

                  style={{
                    height:28,width:25,
                    tintColor:focused?'black':"rgba(127, 127, 127, 1)",
                    

                  }}
                  
                  />
              
                </View>
              )
            }}/>
            <Tab.Screen name='Notfications' component={Notifications} options={{
              tabBarIcon:({focused})=>(
                <View>
                  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3602/3602123.png'}}
                  resizeMode='contain'

                  style={{
                    height:28,width:25,
                    tintColor:focused?'black':"rgba(127, 127, 127, 1)",
                    

                  }}
                  
                  />
              
                </View>
              )
            }}/>
        </Tab.Navigator>

  )
}
const AppDrawer=()=>
{
  const Stack = createStackNavigator();
  return(
    <></>
  )
}
const styles= StyleSheet.create({
  Shadow : {  
    shadowOffset: {width: 2, height: 4},  
    shadowColor: 'black',  
    shadowOpacity: 0.8,  
    height:100,
    shadowRadius: 3,  
  },  
})