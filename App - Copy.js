import { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, FlatList
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { Card } from "react-native-elements";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();
var itemes = []
function Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
    itemes = items
  }, []);

  const heading = doneHeading ? "Completed" : "Todo";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  const [text, setText] = useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [items, setItems] = useState(null);




  
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
       "create table if not exists items (id integer primary key not null, done int, value text, sender_email text, receiver_email text, time_date text);"

      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, [items]);


var time_date
  const Send = async () => {
    try {
      
        var formData = new FormData()
        
        formData.append("sender_email", 's@g.com');
        formData.append("receiver_email", 'r@g.com');
        formData.append("time_date", time_date);
        formData.append("text", text);
       

        const response = await fetch("https://acbe-197-156-137-153.ngrok.io/send", {
          method: 'POST',
          body: formData,
          headers: {
            'content-type': 'multipart/form-data',
          },
        });
        //Callback();
        const json = await response.json();

        const success = json.success;
      

    } catch (e) {
      err = "An error occurred.";
      //alert(e)
    }

  }


  const add = (text) => {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }
    var email = 'r@g.com';
    var email1 = 's@g.com';
    time_date = new Date()
    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value,sender_email, receiver_email, time_date) values (0, ?, '"+email+"', '"+email1+"', '"+time_date+"')", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      
      

      null,
      forceUpdate,
      
    );
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example</Text>

      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQlite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="what do you need to do?"
              style={styles.input}
              value={text}
            />
          </View>

          <FlatList style={{
    marginBottom: "10%"
}}


        data={items}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View style={item.sender_email === 's@g.com' ? styles.card : styles.cardR}>

                        <View style={{ marginLeft: 5 }}>
                            <Text style={{
                                color: "#000"
                            }}>{item.value}</Text>
                        </View>                    
                </View>


        )}
    />

            
            
        </>
      )}
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
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

  card:{
    marginLeft: 10,
    backgroundColor: "#fff",
    width: "75%",
    marginBottom:10,
    padding:5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: "#dedede",

  },

  cardR:{
    marginRight: 10,
    backgroundColor: "#dedede",
    width: "75%",
    marginBottom:10,
    padding:5,
    borderRadius: 10,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#dedede",


  }
});