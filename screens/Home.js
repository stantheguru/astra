import { StyleSheet, FlatList, Text, View,  Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'




const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    /*fetch('https://cf5e-102-223-84-20.ngrok.io/getlist')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));*/
  }, []);



  return (
    <View style={{justifyContent: "center", alignItems: "center", flex:1}}>
       <ImageBackground  resizeMode='contain'
    source={require("../assets/load.gif")}
    style={{ 
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",

      
      }}
  >
    <Image resizeMode='contain'  style={{ 
      width: "90%",
      height: "90%",
      
      }} source={require("../assets/help.png")}/>
</ImageBackground >
    </View>
   
  )

  
}

export default Home

const styles = StyleSheet.create({})