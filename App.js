import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ListItem } from './components/ListItem';


export default function App() {
  return (
    <View style={styles.container}>
      
      <ListItem 
        ImageUrl="https://picsum.photos/200"
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        author="sample news" 
      />

      <ListItem 
        ImageUrl="https://picsum.photos/200"
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        author="sample news" 
      />

      <ListItem 
        ImageUrl="https://picsum.photos/200"
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        author="sample news" 
      />

    </View>
  );
}


//const styles を定義して CSSを StyleSheet.create関数で呼び出す
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row"
  },

  leftContainer: {
    backgroundColor: 'red',
    width: 100,
  },

  rightContainer:{
    //backgroundColor: 'blue',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between'
  },

  article:{
    fontSize: 16
  },

  sourceFrom:{
    fontSize: 12,
    color: "grey"
    
  }  

});
