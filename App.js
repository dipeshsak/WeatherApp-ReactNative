//import  Screens
import HomeScreen from './src/HomeScreen'
import InfoScreen from './src/InfoScreen'

// Import react navigation ,react navigation stack
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Home:{screen:HomeScreen},
    Info:{screen:InfoScreen}
  },{
    defaultNavigationOptions:{
      headerTintColor:"#000",
      headerStyle:{
        backgroundColor:"#0ABDE3"
      },
      headerTitleStyle:{
        color:"#0ABDE3",        
      }
    }
  }
)
const App = createAppContainer(MainNavigator)
export default App
//http://api.openweathermap.org/data/2.5/weather?q=kalyan&appid=39678a134a0dbba7a323770b5fd77f3e
//api key = 39678a134a0dbba7a323770b5fd77f3e

