import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from "react-native";
import React, {Component, useState, useEffect} from 'react';
import { RENDER } from "ci-info";
import { supabase } from '../supabase/supabase'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

const LikedRecipes = ({navigation}) => {

    const[recipes, setRecipes] = useState([]);
    
    const getLikedRecipes = async () => {
        let { data:liked, error } = await supabase
        .from('Liked Recipes')
        .select('*');
        return liked;
    }

    useEffect(() => {
        getLikedRecipes()
        .then((recipes) => {
            setRecipes(recipes)
        })
    })
    


    const delRecipe = async (recipe) => {
        const { data, error } = await supabase
        .from('Liked Recipes')
        .delete()
        .eq('recipe_name', recipe.recipe_name)
    }



    return (
        <FlatList
            data={recipes}
            renderItem = {({item, index}) => {
            return (
                <ImageBackground source={{uri: item.recipe_imageUrl}} blurRadius={5}>
                    <View style={styles.innerContainer}>
                        <Pressable onPress={() => navigation.navigate('Recipe', {url: item.recipe_webUrl})} >
                            <Text style={styles.recipetext}>{item.recipe_name}</Text>
                        </Pressable>
                        <Pressable onPress={() => delRecipe(item)} >
                            <AntDesign name="closecircleo" size={30} color="white" style={styles.plus}/>
                        </Pressable>
                    </View>
                </ImageBackground>
            );
            }}
            keyExtractor={(item) => item.id}
        />
    );
};

export default LikedRecipes;
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