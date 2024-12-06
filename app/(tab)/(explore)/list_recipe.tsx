import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import homeBar from "../../../assets/images/home-bar.png";
import { getRequest } from "@/helpers/api-requests";
import CardFood from "@/components/cards/card_food";
import SearchInput from "@/components/input/search_input";

import { Recipe } from "../../../constants/types/recipes.type";

export default function ListRecipeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    setSearchInput(searchTerm);
  };

  useEffect(() => {
    getRequest("/recipes", {
      "search-value": searchInput,
    })
      .then((response) => {
        setRecipes(response.recipes);
      })
      .catch(() => {});
    // .finally(() => {
    //   setLoading(false);
    // });
  }, [searchInput]);
  return (
    <>
      <ImageBackground
        source={homeBar}
        style={{ width: "100%", height: 150, backgroundColor: "#F05193" }}
        resizeMode="cover"
      >
        <View className="absolute inset-x-0 bottom-0 h-16 px-5">
          <SearchInput onSearch={handleSearch} />
        </View>
      </ImageBackground>
      <ScrollView className="bg-white">
        <View className="mt-[-10]">
          {recipes.map((recipe) => (
            <TouchableOpacity key={recipe.id}>
              <CardFood key={recipe.id} recipe={recipe} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
