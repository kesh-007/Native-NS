import { View, Text } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import {auth} from '../FireBase/firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements'
const Upload = () => {
  

  
  


  return (
    <View>
      <SafeAreaView>
      <Text>Hello</Text>
      <Button title="Logout" onPress={()=>{auth.signOut();}}/>
     
    </SafeAreaView>

    </View>
  )
}

export default Upload