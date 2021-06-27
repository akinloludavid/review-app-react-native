import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
// import { styles } from '../styles/styles';
const Header = ({navigation, title}) =>{
  const toggleMenu = () =>{
    navigation.openDrawer()
  }
  return (
    <ImageBackground source = {require('../assets/game_bg.png')} style = {styles.header}>
    <MaterialIcons name = "menu" size={28}
          onPress= {toggleMenu} style = {styles.icon}
        />
      <View style ={{flexDirection:'row'}}>
        <Image style ={styles.headerImage} source = {require('../assets/rating-1.png')} />
        <Text style = {styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>

  )
}

export default Header
const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:0
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1
  },
  icon:{
    position:'absolute',
    left:0
  }, 
  headerImage:{
    width:26,
    height:26,
    marginHorizontal:10
  }
})
 