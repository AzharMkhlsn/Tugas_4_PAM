import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react'; 
import * as Location from 'expo-location'


const API_KEY = 'bc1a2adf2c03c2c7742948accde55775'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
export default function WeatherScreen() {
 

  const[errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')
  useEffect(()=>{
    load()
  }, [])
  async function load(){
  
    try{
      let { status } = await Location.requestPermissionsAsync()
      
      if(status !== 'granted' ){
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      
      const { latitude, longitude } = location.coords
      const weatherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${API_KEY}`
      const response = await fetch(weatherUrl)
      const result = await response.json()
      if (response.ok) {
        setCurrentWeather(result)
    } else {
        setErrorMessage(result.message)
    }
     
  } catch(error){setErrorMessage}
      
 }
    if(currentWeather) {
      const{
        main:{ temp}, 
        weather: [details],
        name,
      } = currentWeather
      const { icon, main, description } = details

const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
      return (
        <ImageBackground source={require('./bg2.png')}
      style={{flex :1}}>
        <View style={styles.container}>
         
        <StatusBar style={styles.main} />
        <Text style={styles.texSecondary}>== {name} ==</Text>
        <Image style ={styles.weatherIcon} source= {{uri : iconUrl}}/>
        <Text style={styles.textPrimary}>{temp}°C</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text style={styles.texSecondary}>{main}</Text>
         
        </View>
        </ImageBackground>
      )

    }else{
      return (
       
      <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <StatusBar style="auto" />
        </View>
      ) 
   }
   
  
  }
 


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
},
weatherinfo:{
  alignItems:'center',
  color : '#fff',

},

weatherDescription: {
textTransform: 'capitalize',
borderBottomWidth: 2,
},
weatherIcon: {
width: 200,
height: 200,
},
textPrimary: {
fontSize: 40,
color : '#fff',

},
texSecondary: {
fontSize: 20,
color : '#fff',
fontWeight: '500',
marginTop: 10,

},
image:{
width: 'null',
height: 'null',
}
});
