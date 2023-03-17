import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from "react-native";
import React, {Component} from 'react';
import { RENDER } from "ci-info";
import { supabase } from '../supabase/supabase'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

const recipes = [{name: "Bhara Kabab", url:"https://www.indianhealthyrecipes.com/hara-bhara-kabab-recipe/", image:"https://cdn.tasteatlas.com//images/dishes/642a3edb29094c5589221f90ec6fce2d.jpg?w=905&h=510"},
                {name: "Boti Kabab", url:"https://recipes.timesofindia.com/us/recipes/boti-kebab/rs63829689.cms", image: "https://cdn.tasteatlas.com//images/dishes/3409b3561e6e4fb59458628d63c352b0.jpg?w=905&h=510"},
                {name: "Khandvi", url:"https://www.vegrecipesofindia.com/khandvi-recipe-how-to-make-khandvi/", image: "https://cdn.tasteatlas.com//images/dishes/c5eba8c90005428d89702dd98899f6c8.jpg?w=905&h=510"},
                {name: "Bikaneri Bhujia", url:"https://www.tarladalal.com/bikaneri-bhujia-3860r", image: "https://cdn.tasteatlas.com//Images/Dishes/f21fb751071b4c3bacef5f98e0544889.jpg?w=905&h=510"},
                {name: "Masala Papad", url:"https://www.whiskaffair.com/masala-papad/", image: "https://cdn.tasteatlas.com//images/dishes/f86e018df51d4e798740b8c82406bcd8.jpg?w=905&h=510"},
                {name: "Chilli Paneer", url:"https://www.indianhealthyrecipes.com/chilli-paneer-recipe/", image: "https://cdn.tasteatlas.com//images/dishes/3c3fae0fcdb64009a564a28b50b41ef1.jpg?w=905&h=510"},
                {name: "Gobi Manchurian", url:"https://www.indianhealthyrecipes.com/gobi-manchurian-recipe/", image: "https://cdn.tasteatlas.com//images/dishes/cba6279ae21445539df7e5f35b063bcb.jpg?w=905&h=510"},
                {name: "Dahi Vada", url:"https://www.indianhealthyrecipes.com/dahi-vada-recipe/", image: "https://cdn.tasteatlas.com//Images/Dishes/bf8970f08f764a01b9b416c5c3330204.jpg?w=905&h=510"},
                {name: "Paneer Tikka", url:"https://www.indianhealthyrecipes.com/paneer-tikka-on-stove-top/", image: "https://cdn.tasteatlas.com//images/dishes/16dbebbff2e04e0d984f4ed83be93b97.jpg?w=905&h=510"},
                {name: "Papadum", url:"https://recipeland.com/recipe/v/papadum-50381", image: "https://cdn.tasteatlas.com//Images/Dishes/824335caa36140c6ae24be176b2d2a5e.jpg?w=905&h=510"}]

const AppSnacks = ({navigation}) => {

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

export default AppSnacks;
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