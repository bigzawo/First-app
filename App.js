import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={{ uri: "https://dianapps.com/blog/wp-content/uploads/2022/12/How-to-improve-the-performance-of-a-React-Native-app-2048x1152.png" }} 
    style={{width: "100%", height: "100%"}}>
    <View style={styles.container}>
      <Text style={{fontSize: 30,    color: "white", textAlign: "center"}}>React Native</Text>
      <Text style={styles.text}>React native is a framework for building mobile application with javascript and React.</Text>
      <Image source={require("./assets/Screenshot_2024_0816_204222.jpg")} style={styles.Img}/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingTop: 60,
    backgroundColors:  '#9eb198',
    height: "100%",
  },
  text:{
    fontSize: 18,
    color: "white",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius : 10,
    backgroundColor:"#ffffff10",
    width: "100%",
  },
  Img:{
    width: "100%",
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  }
});
