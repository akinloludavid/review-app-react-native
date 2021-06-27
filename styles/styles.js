import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
    //  alignItems: 'center',
    //  justifyContent: 'center',
    padding: 20
   },
  titleText:{
    fontFamily:'mont-bold'
  },
  ratings:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
   
  
})

export const images = {
  ratings:{
    '1':require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png')
  }
}