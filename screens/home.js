import React, { useState } from "react";
import { FlatList, TouchableOpacity,StyleSheet, View, Text, Modal } from "react-native";
// import { styles } from "../styles/styles.js";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
const Home = ({ navigation }) => {
 const [modalOpen, setModalOpen] = useState(false);
 const [reviews, setReviews] = useState([
  {
   title: "Zelda, Breath of Fresh Air",
   rating: 5,
   body: "lorem ipsum",
   key: "1",
  },
  {
   title: "Gotta Catch Them All (again)",
   rating: 4,
   body: "lorem ipsum",
   key: "2",
  },
  { title: 'Not So "Final" Fantasy', rating: 3, body: "lorem ipsum", key: "3" },
 ]);
 const passData = (id) => {
  const item = reviews.filter((rev) => rev.key == id)[0];
  navigation.navigate("ReviewDetails", item);
 };
 console.log(modalOpen)
 return (
  <View style={styles.container}>
    <Modal visible={modalOpen} transparent={true} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={styles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
  </View>
 )
};


const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});

export default Home;
