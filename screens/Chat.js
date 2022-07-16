import { useState, useEffect, useIsFocused } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View, FlatList, Image
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from "react-native-cards";


const Chat = () => {
    const [items, setItems] = useState(null);
    const [text, setText] = useState(null);

    useEffect(async () => {

        var formDat = new FormData();

        //alert(now)
        try {

            formDat.append("task_id", 1)

            const response = await fetch("https://acbe-197-156-137-153.ngrok.io/chats", {
                method: 'POST',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                body: formDat,
            });
            const json = await response.json();
            const success = json.success;

            setItems(json)


        } catch (e) {
            //alert(e)
        }


        //fetch the coordinates and then store its value into the coords Hook.

    }, [items]);

    const FetchChats = async () => {
        var formDat = new FormData();
        formDat.append("task_id", 1)

        const response = await fetch("https://acbe-197-156-137-153.ngrok.io/chats", {
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data',
            },
            body: formDat,
        });
        const json = await response.json();
        const success = json.success;

        setItems(json)
    }



    const Send = async () => {
        try {

            var formData = new FormData()

            formData.append("client_email", 'c@g.com');
            formData.append("worker_email", 'w@g.com');
            formData.append("sender", 'w@g.com');
            formData.append("message", text);
            formData.append("task_id", 1);

            const response = await fetch("https://acbe-197-156-137-153.ngrok.io/send_chat", {
                method: 'POST',
                body: formData,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            //Callback();
            const json = await response.json();

            const success = json.success;
            setText("")
            FetchChats()


        } catch (e) {
            //alert(e)
        }

    }




    return (
        <View style={styles.container}>
            

            <Card style={{
                alignContent: "center",
                justifyContent: "center", marginBottom: 50,

            }}>
                <View style={{
                    flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                }}>
                    <Image style={styles.image
                    } source={require("../assets/ceo.jpg")} />
                    
                    <View>
                    <Text style={styles.name}>Warlords of Kaah</Text>
                    <Text style={styles.seen}>Online</Text>

            

                    </View>


                </View>

            </Card>




            <FlatList style={{
                marginBottom: "4%",
                backgroundColor: "#f0f2f1",
                paddingTop: 50,
                paddingBottom: 40

            }}


                data={items}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View style={item.sender === 'w@g.com' ? styles.card : styles.cardR}>

                        <View style={{ marginLeft: 5 }}>
                            <Text style={{
                                color: "#000"
                            }}>{item.message}</Text>
                            <Text style={{
                                color: "gray",
                                alignSelf: "flex-end"
                            }}>{item.sent_time}</Text>
                        </View>
                    </View>


                )}
            />

            <View style={styles.flexRow}>
                <TextInput
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={() => {
                        Send();
                        setText(null);
                    }}
                    placeholder="what do you need to do?"
                    style={styles.input}
                    value={text}
                />
                <TouchableOpacity style={styles.btn} onPress={Send}>

                    <SimpleLineIcons size={24} name="paper-plane" color="white" />

                </TouchableOpacity>

            </View>




        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 75,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
        marginRight: "5%",
        alignItems: "center",
    },
    input: {
        borderColor: "#dedede",
        borderRadius: 40,
        borderWidth: 1,
        height: 48,
        margin: 10,
        padding: 8,
        width: "84%",

    },
    btn: {
        width: 48,
        justifyContent: "center",

        alignSelf: "center",
        alignItems: "center",
        borderRadius: 40,
        height: 48,
        backgroundColor: "#128C7E",

    },
    listArea: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        paddingTop: 16,
    },
    sectionContainer: {
        marginBottom: 16,
        marginHorizontal: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },

    card: {
        marginLeft: 10,
        backgroundColor: "#fff",
        width: "75%",
        marginBottom: 10,
        padding: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "#dedede",

    },

    cardR: {
        marginRight: 10,
        backgroundColor: "#dcf8c6",
        width: "75%",
        marginBottom: 10,
        padding: 5,
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "#dedede",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,



    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 8,
        marginTop: 8

    },
    name: {
        height: 20,
        borderRadius: 40,
        marginRight: 5,
        marginLeft: 5,
       
        marginTop: 8,
        fontWeight: "bold", fontSize: 16, 

    },
    seen: {
        height: 20,
        borderRadius: 40,
        marginRight: 5,
        marginLeft: 5,

        marginTop: 8,
        fontWeight: "bold", fontSize: 14, 
        color: "green"

    },
});