import HomeScreen from "./screens/HomeScreen";
import AppSnacks from "./screens/AppSnacks";
import Entrees from "./screens/Entrees";
import Desserts from "./screens/Desserts";
import Recipe from "./screens/Recipe";
import LikedRecipes from "./screens/LikedRecipes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";                  
import "react-native-gesture-handler";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Appetizers & Snacks" component={AppSnacks} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} />
        <Stack.Screen name="Entrees" component={Entrees} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}/>
        <Stack.Screen name="Desserts" component={Desserts} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}/>
        <Stack.Screen name="Recipe" component={Recipe} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}/>
        <Stack.Screen name="My Liked Recipes" component={LikedRecipes} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
