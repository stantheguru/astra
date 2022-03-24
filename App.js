import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from  './screens/Login';
import Home from './screens/Home';
import HomeScreen from './screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';



import { Icon } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'



function ActionBarIcon() {
  return (

    <View style={{flexDirection: "row", marginRight:5}}>
      <TouchableOpacity style={{marginRight: 22}}><AntDesign name="camerao" size={24} colors="black" /></TouchableOpacity>
    <TouchableOpacity><SimpleLineIcons name="pencil" size={24} colors="black" /></TouchableOpacity>
    </View>
 
  );
}

function ActionBarIconLeft() {
  const navigation = useNavigation();

  return (

    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginLeft: 5}}>
        <Avatar rounded style={{width: 40,height: 40,borderRadius: 20,overflow:'hidden'}}     
        source={require("./assets/ceo.jpg")} />
      </TouchableOpacity>
 
  );
}


const Stack = createStackNavigator();

const App = () => {

  

  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Home'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>

    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name="Home"  component={Home} options={{ 
            headerRight : props => <ActionBarIcon />,
            headerLeft : props => <ActionBarIconLeft /> }}></Stack.Screen>

    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
