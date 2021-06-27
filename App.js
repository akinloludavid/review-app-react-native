import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font'
import { styles } from './styles/styles';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer'

const getFonts = ()=>{
  return Font.loadAsync({
    'mont-regular':require('./assets/fonts/Montserrat-Regular.ttf'),
    'mont-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  })  
}

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false)

  if(loadFonts){
    return (
      <Navigator/>
    );
  }else {
    return (<AppLoading 
      startAsync = {getFonts}
      onFinish={()=>setLoadFonts(true)}
      onError={console.warn}
     />)
  }
}
