import { StyleSheet, Text, View,Modal,FlatList} from 'react-native';
import {  Image,TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import Post from '../Components/HomeComponents/Post';
import { SafeAreaView } from 'react-native-safe-area-context';


/*
image = {{uri : "https://cdn.mos.cms.futurecdn.net/QKJVSuL6HhvhKwJf23knri.jpg"}}
accountName = {"Iron Man"}
moreInfo = {"additional info"}
 */


const data = [
    {
        id : 1,
        image : {uri : "https://cdn.mos.cms.futurecdn.net/QKJVSuL6HhvhKwJf23knri.jpg"}, 
        accountName : "Iron man",
        moreInfo : "additional info",
        discription : "My fav nfts posted heere and also you can also clim the nft by the pass so called password.",
        NFTName : "ironManNFT",
    },
    {
        id : 2,
        image : {uri : "https://i.pinimg.com/736x/e7/d9/b7/e7d9b7d02006c82b6e8a2a1a9e6d3eaf.jpg"},
        accountName : "Shinchan",
        moreInfo : "Hungama",
        discription : "Shinchan is a five year old boy living in japan njdnvjdvn jckdvnj jcdncvjd vjdvdsuv jvdsijvdip jdisvjdsifu.",
        NFTName : "shinchanNFT",

    },
];

export default function HomePage({navigation}){
    return (
        
        <SafeAreaView style={{flex:1}}>
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
    
          

            <View style = {{flex : 1}}>
                <FlatList
                    keyExtractor={(item)=> item.id}
                    data = {data}
                    renderItem={({item})=> (<Post
                        post = {item.image}
                        profile = {item.image}
                        accountName = {item.accountName}
                        moreInfo = {item.moreInfo}
                        discription = {item.discription}
                        NFTName = {item.NFTName}
                        />)
                    }
                />
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
