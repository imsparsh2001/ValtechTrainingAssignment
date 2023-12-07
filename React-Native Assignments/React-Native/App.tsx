import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import Header from './header';

function App() {
  const herolist = [
    {  title: "Ironamn", poster: require("./images/ironman.jpg") },
    {  title: "Batman", poster: require("./images/batman.jpg") },
    {  title: "Superman", poster: require("./images/superman.jpg") },
    {  title: "Antman", poster: require("./images/antman.jpg") },
    {  title: "Spiderman", poster: require("./images/spiderman.jpg") },
    {  title: "Rajani", poster: require("./images/rajani.jpg") },
    {  title: "Hulk", poster: require("./images/hulk.jpg") },
    {  title: "blackpanther", poster: require("./images/blackpanther.jpg") },
    {  title: "deadpool", poster: require("./images/deadpool.jpg") },
    {  title: "phantom", poster: require("./images/phantom.jpg") },
    { title: "Hawkeye", poster: require("./images/hawkeye.jpg") },
    {  title: "falcon", poster: require("./images/falcon.jpg") },
  ];

  return (
    <SafeAreaView >
    
      <ScrollView >
      <Header />
        <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        {herolist.map((item, index) => (
          <View key={index} style={{ margin: 10,position:"relative"}}>
            <ImageBackground source={item.poster} style={{ width: 150, height: 150, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: 120, left: 10, color: 'white', fontWeight: 'bold' }}>{item.title}</Text>
          </View>
          
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
