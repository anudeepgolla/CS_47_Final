import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

const headerimage = {uri: 'https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg'};
const appimage = {uri: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&w=1000&q=80'};
const entimage = {uri: 'https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE='};
const desimage = {uri: 'https://www.cookingcarnival.com/wp-content/uploads/2020/10/Gulab-jamun.jpg'};


const onPressFunc = () => {
}

export default function HomeScreen({navigation}) {
  return (
    <View>
      <ImageBackground source={headerimage} blurRadius={20} style={styles.headerimage}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Desi Recipes</Text>
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <ImageBackground source={appimage} blurRadius={5} borderRadius={20} style={styles.bodyimage}>
          <Pressable onPress={() => navigation.navigate('Appetizers & Snacks')}>
            <Text style={styles.bodytext}>Appetizers & Snacks</Text>
          </Pressable>
        </ImageBackground>
        <ImageBackground source={entimage} blurRadius={2} borderRadius={20} style={styles.bodyimage}>
          <Pressable onPress={() => navigation.navigate('Entrees')}>
            <Text style={styles.bodytext}>Entrees</Text>
          </Pressable>
        </ImageBackground>
        <ImageBackground source={desimage} blurRadius={5} borderRadius={20}style={styles.bodyimage}>
          <Pressable onPress={() => navigation.navigate('Desserts')}>
            <Text style={styles.bodytext}>Desserts</Text>
          </Pressable>
        </ImageBackground>
        <Pressable onPress={() => navigation.navigate('My Liked Recipes')}>
            <Text style={styles.savedtext}>My Liked Recipes</Text>
          </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: WindowHeight*0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //margin: 50,
  },
  headertext: {
    fontFamily: "Marker Felt",
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    //backgroundColor: '#587958',
    borderRadius: 10,
    overflow: 'hidden',
    paddingTop: 30,
    //backgroundColor: '#E9F8E9',
    //backgroundColor: 'rgba(0,0,0, 0.70)',
  },
  bodyimage: {
      width: WindowWidth*0.9
  },
  body: {
    height: WindowHeight*0.8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 50,
    //backgroundColor: '#E9F8E9',
  },
  bodytext: {
    fontFamily: "Avenir",
    fontSize: 30,
    color: 'white',
    //fontWeight: 'bold',
    padding: 50,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0, 0.50)',
    textAlign: 'center',

  },
  savedtext: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: 'white',
    //fontWeight: 'bold',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: 'black',
    textAlign: 'center',

  },

});
