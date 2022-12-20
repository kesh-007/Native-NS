import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notifications = () => {
  return (
    <SafeAreaView>
    <View style={{backgroundColor:'white'}}>
      <View style={{  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
}}>
      <Text style={{fontSize:22,fontWeight:"700",marginLeft:20,marginTop:20}}>Activity</Text>
      <Divider width={2} orientation='vertical' style={{marginTop:15,borderRadius:10,elevation:10}}/>
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Notifications