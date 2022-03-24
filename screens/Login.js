import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, ImageBackground
} from "react-native";
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'



const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const push = async () => {
    
    const response = await fetch('https://cf5e-102-223-84-20.ngrok.io/login_react', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
    
  });
  const json = await response.json();
      const success = json.success;
      if(success == "Login Success"){
        navigation.navigate('Home');
      }else{
        alert("An error occurred");
      } 
  }


  
  
  
  return (
    <ImageBackground
      source={require("../assets/back1.jpg")}
      style={{
        flex: 1,
        weight: null,
        height: null
      }}
    >


      <View style={styles.image}>
        <Image style={{  }} source={require("../assets/butterfly.png")} />
      </View>
      <View style={{justifyContent: "center",
        alignItems: "center",
        alignContent: "center"}}>
      <Text style={{
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold",
        fontFamily: "",
        margin: 8,
        
      }}>Astra Love</Text>
      </View>


      <Card style={styles.card}>


        <CardContent>

          <StatusBar style={{ color: "white" }} />
          <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.inputView}>

              <Input
              leftIcon={
                <Icon name="user" type="antdesign" 

                size={24} color="black"/>
            }
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.inputView}>
              <Input
              leftIcon={
                <Icon name="lock" type="antdesign" 
                size={24} color="black"/>
            }
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>



            <TouchableOpacity onPress={push} style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.botom}>
              <TouchableOpacity style={styles.forgot_button}>
                <Text style={{color: "#3480eb"}} >Forgot Password?</Text>
              </TouchableOpacity>

              <View style={{flex: 1}}></View>


              <TouchableOpacity style={styles.signup_button}>
                <Text style={{color: "#3480eb"}} >Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </CardContent>


      </Card>

    </ImageBackground >
  )
}

export default Login

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,




  },

  image: {

    alignItems: "center",
    justifyContent: "center",
    marginTop: 100

  },

  inputView: {
    borderRadius: 20,
    height: 45,
    width: "80%",

    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    width: "100%",
    padding: 10,
    borderBottomColor: "#000",
  },

  forgot_button: {
    height: 30,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",


  },

  signup_button: {
    flex: 1,
    height: 30,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",


  },

  loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#e33d3d",
    width: "80%",


  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: "bold",
    letterSpacing: 5,
    alignSelf: "flex-start",
    marginLeft: 32
  },
  loginText: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 5,
    color: "#fff"
  },
  botom: {
    flexDirection: "row",
    width: "80%",
    justifyContent:'space-between'

  }
});
