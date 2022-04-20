import { View, Text, StyleSheet, Button , ImageBackground} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function HomeScreen({navigation}) {
  return (
      <ImageBackground source={require('./bg1.jpg')}

      style={{flex :1}}>
      <View style={styles.container}>
      <View style={styles.menu}>
      <Text style={styles.menu2}>Weather App</Text>
      

    <View style={styles.back}>
      
      <View>
      <View  style={styles.cek}>
      <FontAwesome5  name='cloud' color={'white'}size={70} />
      </View>

      <View  style={styles.cek}>
      <FontAwesome5  name='cloud-sun' color={'white'}size={70} />
      </View>

      </View>


      <View>
      <View  style={styles.profile}>
      <FontAwesome5  name='cloud-rain' color={'white'}size={70}  />
     
      </View>
      <View  style={styles.profile}>
      <FontAwesome5  name='cloud-moon' color={'white'}size={70}  />
     
      </View>
      </View>
      </View>
      </View>

    </View>


     <View   style={styles.container}>
    
      <Text>click start to see the weather around you</Text>
      <View    style={styles.button}>
      <Button title="START"  color ={'indigo'} size= {20}
      onPress={() => navigation.navigate("location")}
     />
      </View>
      </View>
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    back:{
        flex: 1,
    },
    menu:{
        height:300,
        width:270,
       
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10
      
      },
      menu2:{
        fontSize : 26,
        color: 'indigo',
        fontWeight : 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      back:{
       
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      cek:{
        marginHorizontal:20,
        opacity:0.8,
        marginVertical:20,
        height:70,
        width:100,
        
        alignItems: 'center',
        justifyContent: 'space-between',
      
      },
      profile:{
   
        marginHorizontal:20,
        marginVertical:20,
        height:70,
        width:100,
        opacity:0.8,
        alignItems: 'center',
      
      },
      button:{
        
        width:200,
        marginTop:5,
        backgroundColor:'red',
        borderColor:'black',
        borderWidth:2,
        borderRadius: 5,

      }
      

});