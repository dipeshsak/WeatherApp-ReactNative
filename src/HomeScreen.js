import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, StatusBar} from 'react-native';
const HomeScreenBckImg = { uri: "https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84531_960_720.jpg" };
class HomeScreen extends React.Component {

     static navigationOptions={
         title:"WEATHER APP",
         headerTitleStyle:{
            color:"#fff",
            textAlign:'center'
          }
     }
  render(){
      console.log("Nav props",this.props.navigation.navigate)
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ImageBackground
    source={HomeScreenBckImg}
    style={styles.bckimage}
    >
   
    <View style={styles.inputBtnContainer}>
      <TextInput placeholder="Enter City Name..."
       style={styles.textinput}/>
      <TouchableOpacity
      onPress={()=>{this.props.navigation.navigate("Info")}}
      style={styles.btn}
      >
          <Text style={styles.btnText}>Check Weather</Text>
      </TouchableOpacity>
      </View> 
    
    </ImageBackground>
    </View>
  );
}
}
export default HomeScreen

//http://api.openweathermap.org/data/2.5/weather?q=kalyan&appid=39678a134a0dbba7a323770b5fd77f3e
//api key = 39678a134a0dbba7a323770b5fd77f3e
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  inputBtnContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  textinput:{
     height: 50, 
     width:'80%',
     color:"#fff",
     fontWeight:"bold",
     //fontFamily:"sans-serif",
     fontSize:25,
     borderColor: '#0ABDE3', //color:"#0ABDE3",
     borderWidth: 3,
     borderRadius:10,
     textAlign:'center'
  },
  btn:{
      marginTop:20,
      width:'50%',
      height: 50, 
      borderRadius:10,
      borderWidth:3,
      borderColor: '#0ABDE3',
      backgroundColor: '#fff',
      opacity:0.5
  },
  btnText:{
    textAlign:'center',
    fontSize:20,
    marginTop:5,
    color:'#000'
  },
  status:{
    opacity:0.5
  }
});
