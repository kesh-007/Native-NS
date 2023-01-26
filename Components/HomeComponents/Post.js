import react from 'react';
import { useState , useRef} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Divider } from 'react-native-elements';
import { Button, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native';
import {TapGestureHandler,GestureHandlerRootView} from 'react-native-gesture-handler';


export default function Post(props){

    const doubleTapRef = useRef();
    const discriptionLength = props.discription.length ;
    const [likeShow , setLikeShow] = useState(false);
    const [likes , setLikes] = useState(false);
    const [morebtn , setMorebtn] = useState(false);
    const OnDoubleTap=()=>{
        setLikes(!likes)
    }
    
    return (
        <View>
        <View style = {styles.mainView}>
            <View style = {styles.postHeader}>
                <Image style = {styles.postProfile} 
                    source = {props.profile}/>
                <View style = {styles.postProfileName}>
                    <Text style = {{fontSize : 18}}>{props.accountName}</Text>
                    <Text style = {{fontSize : 14,color:'rgba(0,0,0,60)'}}>{props.moreInfo}</Text>
                </View>
                <TouchableOpacity>
                    <Image style = {{height : 24, width : 24}}//more-info 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/2311/2311524.png"}}/>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.postImage}>
                        <TapGestureHandler onActivated={()=>{}} numberOfTaps={2}>
                        
                            <ImageBackground style = {{height : '100%',width : '100%',
                            resizeMode : 'stretch',justifyContent : 'center',borderRadius:20,
                            alignItems:'center'}}
                            source = {props.post}>
                                                 
                            </ImageBackground>
                            </TapGestureHandler>
 
            </View>

            {/* footer section */}
            <View style = {styles.postFooter}>
                <TouchableOpacity onPress={()=>{setLikes(!likes); console.log("Prered")}}>
                    { (!likes)?
                        (<Image style = {{width : 30,height : 30}} 
                        source = {{uri : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"}}/>)
                    :
                        (<Image style = {{width : 40,height : 40}} 
                            source = {{uri : "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"}}/>)
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{console.log("Pressed")}} >
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/3193/3193015.png"}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.claimButton}>
                    <Text style = {styles.claimButtonText}>CLAIM</Text>
                </TouchableOpacity>
                
                <View style = {{width : 30 , height : 30}}/>
                
                <TouchableOpacity>
                    <Image style = {{width : 30,height : 30}} 
                    source = {{uri : "https://cdn-icons-png.flaticon.com/512/565/565340.png"}}/>
                </TouchableOpacity>
            </View>
            <View style  = {{width : '100%',height : 10,alignItems : 'center'}}>
                    <View style = {{width : 180,height : 1,backgroundColor : 'rgba(0,0,0,0.5)'}}/>
            </View>
            {/*post discription seciton*/}
            <View>
                <View style = {styles.aboutPostContainer}>
                    <View style = {{width : 100}}></View>
                    <Text style = {{fontSize : 15}}>{props.NFTName}</Text>
                    <Text style = {{fontSize : 11}}>8:40 AM , 12 sep 2020</Text>
                </View>
                <View style = {{flex : 1 , 
                    flexDirection : "row" ,
                    backgroundColor : "white" , 
                    paddingHorizontal : 10}}>
                    <View>
                        <Text style = {{fontWeight : "bold"}}>{props.accountName}</Text>
                    </View>
                    {
                        (props.discription.length<45)?
                            <View style = {styles.postDisciption}>
                                <Text>{props.discription}</Text>
                            </View>
                        :
                        <View style = {styles.postDisciption}>
                            {   
                                (!morebtn)?
                                    <Text>{props.discription.substring(0,discriptionLength - 55)+"... "}</Text>
                                :
                                    <Text>{props.discription.substring(0,discriptionLength - 40)}</Text>
                            }
                                                                <View/>

                           
                            <TouchableOpacity onPress = {()=>{setMorebtn(!morebtn)}}>
                                {  
                                    (!morebtn)?
                                    <SafeAreaView>
                                    <Text style = {{fontWeight : "bold" , color : "rgba(21, 117, 231, 1)",flexWrap:'wrap',flex:1}}> more</Text>
                                    </SafeAreaView>
                                    :
                                    <View/>
                                }
                                
                            </TouchableOpacity>
                            
                        </View>
                        
                    }
                </View>
                {
                    (morebtn)?
                    <View style={{paddingHorizontal : 10}}>
                        <Text style = {{backgroundColor : "white" , paddingBottom : 10}}>{props.discription.substring(discriptionLength-40,discriptionLength)}</Text>
                    </View>
                    :
                    <View style={{paddingHorizontal : 10}}></View>
                }
            </View>
            <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
            <View style = {{width : '100%',height : 1}}></View>
            <View style = {{backgroundColor : "rgba(0,0,0,0.22)",width : '100%',height : 1}}/>
    
        </View>
        
        <Divider width={1} orientation='vertical' style={{marginTop:2,marginBottom:2}}/>
        </View>

    )
}

const styles = StyleSheet.create({

    mainView : {
        backgroundColor : 'white',
        borderRadius:10
    },

    aboutPostContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 10,
        
        paddingHorizontal : 10,
    },

    postImage : {
        alignItems : 'center',
        height : 400,
        width : '100%',
        marginBottom : 20,
        
        paddingHorizontal : 10,
    },

    postFooter : { 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

        //paddingBottom : 10,
        marginBottom : 20,
        paddingLeft : 20,
        paddingRight : 10,
    },

    postHeader : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10,

        paddingHorizontal : 10,
    },

    postProfileName : {
        flex : 1,
        marginLeft : 10,
        fontSize : 12,
    },

    postProfile : { 
        borderRadius : 50,
        height : 50,
        width : 50
    },

    claimButton : {
        height : 40,
        width : 120,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(9,252,150,100)',
        borderRadius : 40,
    },

    claimButtonText : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold'},

    postDiscriptionAccountName : {
        fontSize : 15,
        paddingHorizontal : 10,
        fontWeight : 'bold',
    },

    postDisciption : {
        fontSize : 15,
        width : "100%",
        paddingHorizontal : 10,
        flexDirection : "row",
    }
});