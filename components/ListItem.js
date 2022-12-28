import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export const ListItem = (props)=>{
    return(
        <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
        <Image
          source={{uri: props.ImageUrl}}
          style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.article}>
            {props.article}
          </Text>
          <Text style={styles.sourceFrom}>{props.author}</Text>
        </View>
      </View>  
    );
}


const styles = StyleSheet.create({
    
  
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
  