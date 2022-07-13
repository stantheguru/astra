import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>

       

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

// ...

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFriend,
  }, dispatch)
);

export default FriendsScreen