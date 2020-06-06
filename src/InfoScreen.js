import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
//typeImg=""
const InfoScreenBckImg = { uri: "https://cdn.pixabay.com/photo/2019/06/05/14/08/nature-4253751_960_720.jpg" };
class InfoScreen extends React.Component {

    static navigationOptions={
        title:"London",
        headerTitleStyle:{
            color:"#fff",       
          }    
    }
  render(){
  return (
    <View style={styles.container}>
     <ImageBackground 
        source={InfoScreenBckImg}
         style={styles.bckimage}>
        <View style={styles.infoContainer}>    
         <View style={styles.infoFirstBox}></View>
         <View style={styles.infoSecondBox}></View>
         <View style={styles.infoThirdBox}></View>
        </View>
      </ImageBackground>
    </View>
    
  );
}
}
export default InfoScreen
//http://api.openweathermap.org/data/2.5/weather?q=kalyan&appid=39678a134a0dbba7a323770b5fd77f3e
//api key = 39678a134a0dbba7a323770b5fd77f3e
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bckimage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width:'100%',
    opacity:0.8
  },
  infoContainer:{
      flex:1
  },
  infoFirstBox:{
      flex:1,
      backgroundColor:"#EAF0F1",
      opacity:0.5,
      margin:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3
  },
  infoSecondBox:{
    flex:1,
      backgroundColor:"#EAF0F1",
      opacity:0.5,
      marginRight:10,
      marginLeft:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3
  },
  infoThirdBox:{
      flex:1,
      backgroundColor:"#EAF0F1",
      opacity:0.5,
      margin:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3
  }
});
