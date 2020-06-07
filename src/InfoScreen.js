import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
const InfoScreenBckImg = { uri: "https://cdn.pixabay.com/photo/2019/06/05/14/08/nature-4253751_960_720.jpg" };

//let cityname = this.props.navigation.getparam('city')
class InfoScreen extends React.Component {
    state = {
      data:{
        temperature:'',
        feelsLike:"",
        sunrise:'',
        sunset:'',
        humidity:'',
        windspeed:'',
        weatherMain:'',
        desc:'',
        icon:'',
        cityName:''
      }
    }
    static navigationOptions={
        title:"Weather Details",
        headerTitleStyle:{
            color:"#fff",       
          }    
    }
    fetchWeatherApiCall =()=>{
     let SelectedCity=this.props.navigation.getParam('city')
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${SelectedCity}&units=metric&appid=39678a134a0dbba7a323770b5fd77f3e`)
        .then((res)=>res.json())
        .then((resJson)=>{
         // console.log("real data",resJson)
          this.setState({
            data:{
              temperature:resJson.main.temp,
              feelsLike:resJson.main.feels_like,
              humidity:resJson.main.humidity,
              sunrise:resJson.sys.sunrise,
              sunset:resJson.sys.sunset,
              windspeed:resJson.wind.speed,
              weatherMain:resJson.weather[0].main,
              desc:resJson.weather[0].description,
              icon:resJson.weather[0].icon,
              cityName:resJson.name
            }
          })
        })
        .catch((error)=>{
          console.log("error",error)
        })
        
    }

    EpochToGmt=(time)=>{

    }
    componentDidMount(){
      //console.log("Mount",this.props.navigation)
        this.fetchWeatherApiCall();
    }
  render(){
    const { navigation } = this.props;
    console.log("State data",this.state.data)
    console.log("From Homescreen",navigation.getParam('city'))
  return (
    
    <View style={styles.container}>
     <ImageBackground 
        source={InfoScreenBckImg}
         style={styles.bckimage}>
        <View style={styles.infoContainer}>  

         <View style={styles.infoFirstBox}>
         <Image 
         source={{uri:'http://openweathermap.org/img/w/'
           +this.state.data.icon+".png"
        }}
         style={styles.img}/>
         <View style={styles.cityNameView}>
         <Text style={styles.weatherMain}> {this.state.data.cityName}</Text>
           <Text style={styles.weatherMain}>{this.state.data.weatherMain}</Text>
           </View>
           {/* <Text style={styles.weatherdesc}>
             {this.state.data.desc}</Text> */}
           
           
         </View>

         <View style={styles.infoSecondBox}>
           <Text style={styles.temp}>{this.state.data.temperature}°C</Text>
           <Text style={styles.feelsLike}>Feels Like : {this.state.data.feelsLike}°C</Text>
         </View>
         <View style={styles.infoThirdBox}>
           <View style={styles.hamWindBox}>
             <Text style={styles.hamidity}>Humidity : {this.state.data.humidity} </Text>
             <Text style={styles.windSpeed}>Wind Speed : {this.state.data.windspeed}</Text>
           </View>
           <View style={styles.sunTimeBox}>
           <Text style={styles.sunrise}>Sunrise : -</Text>
             <Text style={styles.sunset}>Sunset : - </Text>
           </View>
         </View>
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
      opacity:0.9,
      margin:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3,
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:"row"
  },
  cityNameView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:140,
    height:140
  },
  weatherMain:{
    fontSize:40,
    color:'teal',
    fontWeight:'bold',
  },
  infoSecondBox:{
    flex:1,
      backgroundColor:"#EAF0F1",
      opacity:0.9,
      marginRight:10,
      marginLeft:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3,
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:"column"
  },
  temp:{
    //backgroundColor:'#000',
    fontSize:90,
    color:'#0ABDE3',
    fontWeight:'bold'
  },
  feelsLike:{
    fontSize:30,
    color:'#000',
    //fontWeight:'bold'
  },
  infoThirdBox:{
      flex:1,
      backgroundColor:"#EAF0F1",
      opacity:0.9,
      margin:10,
      borderRadius:15,
      borderColor:'#2C3335',
      borderWidth:3,
      flexDirection:'row'
  },
  hamWindBox:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around'
  },

  sunTimeBox:{
    flex:1,
    alignItems:"center",
    justifyContent:'space-around',
  },
  hamidity:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:-30
  },
  windSpeed:{
    fontSize:18,
    fontWeight:'bold',
    //marginLeft:15
  },
  sunrise:{
    fontSize:18,
    fontWeight:'bold',
    color:'#ff4f00'
  },
  sunset:{
    fontSize:18,
    fontWeight:'bold',
    color:'#ff4f00',
    marginLeft:-5
    //backgroundColor:'#000'
  }
});
