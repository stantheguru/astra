 import React, { useState, useEffect } from 'react';
import {
  Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ImageButton, SafeAreaView, Dimensions, Alert
} from 'react-native';

import { StatusBar } from "expo-status-bar";
import * as Facebook from 'expo-facebook';
import { LinearGradient } from 'expo-linear-gradient';


const Login = () => {

  const handleFacebookLogin = async () => {
    
  };

  return (
    
    <LinearGradient
      colors={['pink', 'white', 'white']}
      style={styles.container}
      start={{ x: 0.7, y: 0 }}>

      <StatusBar style="auto" />
      
      <Text style={styles.heading1}>Spice</Text>

      <View style={styles.inner}>

      <Image
        style={styles.image}
        source={require("../assets/dating.png")} />
         <Text style={styles.heading}>Find your Partner</Text>
         <Text style={styles.text}>Spice up your love live with Spice</Text>

      </View>

      

         <View style={styles.bottom}>
        <TouchableOpacity  style={styles.continueg}>
        <Image
        style={styles.googleImage}
        source={require("../assets/goog.png")} />
          <Text style={{
            color: "#000",
            fontSize: 14,
            letterSpacing: 5,
          }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookLogin} style={styles.continuef} >
      
        
        <Image
        style={styles.fbImage}
        source={require("../assets/fb.png")} />
          <Text style={{
            color: "#000",
            fontSize: 14,
            letterSpacing: 5,
          }}>Login</Text>
       
       
        </TouchableOpacity>

       


      </View>

    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    justifyContent: "center"
  },
  inner: {
    
    alignItems: 'center',
   
    justifyContent: "center",
    height: "70%"
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    resizeMode: 'contain',
    height: 120

  },
  google: {
    width: 40,
    resizeMode: 'contain',
    height: 30,
    
    

  },
  googleImage: {
    width: 40,
    resizeMode: 'contain',
    height: 30,
  
  },

  fbImage: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
  },

  heading: {
    marginTop: 10,
    fontSize: 20,
    width: "60%",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",


  },
  heading1: {
    marginTop: 10,
    fontSize: 24,
    width: "60%",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    letterSpacing: 4


  },
  text: {
    marginTop: 20,
    fontSize: 16,
    width: "60%",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center"

  },
  circle: {
    backgroundColor: "#dedede",
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 0.75,
    justifyContent: 'flex-end',
    width: "80%",
   
  },
  continueg: {
    width: "100%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#dedede",
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: "row",
  },
  continuef: {
    width: "100%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#dedede",
    borderWidth: 1,
    flexDirection: "row"
  },
  heading: {
    marginTop: 10,
    fontSize: 20,
    width: "60%",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",


  },
})



export default Login