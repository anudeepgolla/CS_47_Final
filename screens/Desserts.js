import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from "react-native";
import React, {Component} from 'react';
import { RENDER } from "ci-info";
import { supabase } from '../supabase/supabase'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

const recipes = [{name: "Gulab Jamun", url:"https://www.indianhealthyrecipes.com/gulab-jamun-recipe-using-milk-powder/", image:"https://i.ndtvimg.com/i/2016-10/gulab-jamun_620x350_81477049812.jpg"},
                {name: "Gajar Ka Halwa", url:"https://www.indianhealthyrecipes.com/carrot-halwa-recipe-gajar-ka-halwa-recipe/", image: "https://i.ndtvimg.com/i/2017-10/gajar-ka-halwa-recipe_620x330_51507896671.jpg"},
                {name: "Sandesh", url:"https://www.indianhealthyrecipes.com/sandesh-recipe-how-to-make-bengali-sandesh-at-home-and-ideas/", image: "https://i.ndtvimg.com/i/2015-04/sandesh_625x350_61429075929.jpg"},
                {name: "Modak", url:"https://www.indianhealthyrecipes.com/modak-recipe-modakam-recipe/", image: "https://c.ndtvimg.com/2018-09/hfq32sf8_modak-650_625x300_12_September_18.jpg"},
                {name: "Aam Shrikhand", url:"https://ministryofcurry.com/mango-shrikhand/", image: "https://c.ndtvimg.com/2020-02/mpuns2eg_shrikhand_625x300_27_February_20.jpg"},
                {name: "Payasam", url:"https://www.indianhealthyrecipes.com/semiya-payasam-recipe/", image: "https://i.ndtvimg.com/i/2016-03/payasam-625_625x350_41459346459.jpg"},
                {name: "Kaju ki Barfi", url:"https://www.indianhealthyrecipes.com/kaju-katli-kaju-barfi/", image: "https://i.ndtvimg.com/i/2016-03/kaju-barfi-625_625x350_81459346355.jpg"},
                {name: "Shahi Tukda", url:"https://www.indianhealthyrecipes.com/shahi-tukda-double-ka-meeta-recipe-with-almond-milk/", image: "https://i.ndtvimg.com/i/2016-10/shahi-tukda_620x350_61477299194.jpg"},
                {name: "Phirni", url:"https://www.vegrecipesofindia.com/phirni-recipe-punjabi-phirni-recipe/", image: "https://i.ndtvimg.com/i/2016-03/phirni-625_625x350_41459346310.jpg"},
                {name: "Kulfi", url:"https://www.indianhealthyrecipes.com/kulfi-recipe/", image: "https://i.ndtvimg.com/i/2016-03/kulfi-625_625x350_81459346278.jpg"}]

const Desserts = ({navigation}) => {

    const checkExists = async (name) => {
        let { data: liked, error } = await supabase
        .from('Liked Recipes')
        .select('*')
        .eq("recipe_name", name);
        if (liked.length > 0) {
            return true;
        }
        return false;
    }

    const addItem = async (recipe) => {
        let exists = await checkExists(recipe.name);
        console.log(exists)
        if (exists == false) {
            const { data, error } = await supabase
            .from('Liked Recipes')
            .insert([
            {recipe_name : recipe.name, recipe_imageUrl: recipe.image, recipe_webUrl: recipe.url},
            ])
        }
    }

    return (
        <FlatList
            data={recipes}
            renderItem = {({item, index}) => {
            console.log(item);
            return (
                <ImageBackground source={{uri: item.image}} blurRadius={5}>
                    <View style={styles.innerContainer}>
                        <Pressable onPress={() => navigation.navigate('Recipe', {url: item.url})} >
                            <Text style={styles.recipetext}>{item.name}</Text>
                        </Pressable>
                        <Pressable onPress={() => addItem(item)} >
                            <AntDesign name="pluscircleo" size={30} color="white" style={styles.plus}/>
                        </Pressable>
                    </View>
                </ImageBackground>
            );
            }}
            keyExtractor={(item) => item.id}
        />
    );
};

export default Desserts;
const styles = StyleSheet.create({
    recipetext: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        padding: 30,
        borderRadius: 20,
        //backgroundColor: 'rgba(0,0,0, 0.50)',
    
      },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center"
      },
    plus: {
        paddingRight: 10
      },

});