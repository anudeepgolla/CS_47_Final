import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from "react-native";
import React, {Component} from 'react';
import { RENDER } from "ci-info";
import { supabase } from '../supabase/supabase'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

const recipes = [{name: "Chicken Makhani", url:"https://www.allrecipes.com/recipe/45957/chicken-makhani-indian-butter-chicken/", image:"https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg"},
                {name: "Aloo Gobi", url:"https://www.indianhealthyrecipes.com/aloo-gobi-recipe/", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-aloo-gobi-vertical-1543273036.png?crop=1.00xw:0.667xh;0,0.0840xh&resize=480:*"},
                {name: "Matar Paneer", url:"https://www.indianhealthyrecipes.com/matar-paneer-mutter-masala/", image: "https://static.toiimg.com/thumb/53251884.cms?width=1200&height=900"},
                {name: "Rogan Josh", url:"https://www.recipetineats.com/rogan-josh/", image: "https://www.recipetineats.com/wp-content/uploads/2020/02/Rogan-Josh_3.jpg"},
                {name: "Tandoori Chicken", url:"https://www.indianhealthyrecipes.com/tandoori-chicken-recipe/", image: "https://lovelaughmirch.com/wp-content/uploads/2015/07/TandooriKitchen2.jpg"},
                {name: "Chana Aloo Curry", url:"https://www.recipetineats.com/easy-chickpea-potato-curry-chana-aloo-curry/", image: "https://theazizkitchen.com/wp-content/uploads/2021/06/image_3.jpg"},
                {name: "Chicken Biryani", url:"https://www.indianhealthyrecipes.com/chicken-biryani-recipe/", image: "https://mediavine-res.cloudinary.com/image/upload/s--DHFjmuuJ--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1661544291/mszl7xubpna63lcjiejr.jpg"},
                {name: "Chicken Tikka Masala", url:"https://cafedelites.com/chicken-tikka-masala/", image: "https://easychickenrecipes.com/wp-content/uploads/2019/03/chicken-tikka-masala-recipe-3-of-6-800x1200.jpg"},
                {name: "Masala Dosa", url:"https://www.indianhealthyrecipes.com/masala-dosa-recipe/", image: "https://www.tasteatlas.com/Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg"},
                {name: "Andhra Dal", url:"https://www.indianhealthyrecipes.com/tomato-pappu-recipe/", image: "https://verygoodrecipes.com/images/blogs/chitra-s-food-book/dosakaya-pappu-andhra-style-cucumber-dal-recipe.640x480.jpg"}]

const Entrees = ({navigation}) => {

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

export default Entrees;
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