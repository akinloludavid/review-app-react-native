import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native'
import {styles, images} from '../styles/styles.js'
import Card from '../shared/card'
const ReviewDetails = ({navigation}) => {
  const rating = navigation.getParam('rating')
  
  return ( 
    <View style= {styles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
        <View style = {styles.ratings}>
          <Text>GameZone rating: {rating}</Text>
          <Image source = {images.ratings[rating]} style = {{width:'30%'}}/>
        </View>
      </Card>
    </View>
  );
}

export default ReviewDetails;