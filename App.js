import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import ColorGenerator from './src/screen/ColorGenerator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Menu from './src/component/Menu';
import { useFonts, JosefinSans_400Regular, JosefinSans_500Medium, JosefinSans_700Bold, JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator()
  let [fontsLoaded] = useFonts({ JosefinSans_400Regular, JosefinSans_500Medium, Nunito_600SemiBold, Nunito_700Bold, JosefinSans_700Bold, JosefinSans_300Light })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' options={{ headerShown: false }}>{(props) => <Home {...props} channelName={'Vikas Dakle'} />}</Stack.Screen>

        {/* course screen */}
        <Stack.Screen name='Course' component={Course} options={{ headerTitleStyle: { fontSize: 25, fontFamily: "Nunito_600SemiBold" }, headerTitle: "Courses", headerTitleAlign: 'center' }} />

        {/* user screen */}
        <Stack.Screen name='Student' component={UserData} options={{ headerTitleStyle: { fontSize: 25, fontFamily: "Nunito_600SemiBold" }, headerTitle: "Students Data", headerTitleAlign: 'center' }} />

        {/* about screen */}
        <Stack.Screen name='About' component={About} options={{ headerTitleStyle: { fontSize: 25, fontFamily: "Nunito_600SemiBold" }, headerTitleAlign: 'center' }} />

        {/* contact screen */}
        <Stack.Screen name='Contact' component={Contact} options={{ headerTitleStyle: { fontSize: 25, fontFamily: "Nunito_600SemiBold" }, headerTitleAlign: 'center' }} />



        {/* <Stack.Screen name='Home' component={Home} /> */}
        {/* <View style={styles.container}>
          <Home />
          <StatusBar style="auto" />
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 50,
    alignItems: 'center'
  },
});
