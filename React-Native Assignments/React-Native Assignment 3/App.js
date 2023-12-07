import {useDeviceOrientation} from '@react-native-community/hooks'
import { Image, ScrollView, Text } from 'react-native';
import { SafeAreaView, StyleSheet, View, useWindowDimensions } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


 
// let data={"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}

 
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(function (response) {
        console.log(response.data); 
        setData(response.data.data);
      })
      .catch(function (error) {
        console.error("Error", error);
      });

  }, []);


  return (
    <ScrollView>
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        {data.map((val) =>
          <View key={val.id} style={{ width: 150, height: 180, backgroundColor: val.id % 2 ? "red" : "blue", padding: 10, margin: 10, borderRadius: 30, borderTopColor: "black", borderTopWidth: 2 }}>
            <Text>{val.first_name + " " + val.last_name}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: val.avatar }} />
            <Text>{val.email}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}