import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native'
import Tittle from './src/componentes/Tittle';



export default function App(){
  return(
    <View style={styles.container}>
      <Tittle/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  }
})