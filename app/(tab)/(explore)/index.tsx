import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import SearchInput from "../../../components/input/search_input";
import CardFood from "@/components/cards/card_food";
import { getRequest } from "@/helpers/api-requests";
import homeBar from "../../../assets/images/home-bar.png";
import foodLogo from "../../../assets/images/Cards/food-logo.webp";
import ingredientsLogo from "../../../assets/images/Cards/igredient-logo.jpg";
import desertsLogo from "../../../assets/images/Cards/deserts.jpg";

import { Recipe } from "../../../constants/types/recipes.type";

export default function ExploreScreen() {
  const navigation = useNavigation<any>();

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

      <View className="pl-5"></View>
      <ScrollView className="bg-white">
        <View className="p-4">
          <Pressable
            onPress={() => navigation.navigate("list_recipe")}
            className="rounded-2xl overflow-hidden bg-white shadow-md mb-4"
          >
            <Image
              source={foodLogo}
              className="w-full h-48"
              resizeMode="cover"
            />
            <View className="absolute bottom-3 left-3">
              <Text className="text-white text-3xl">Food</Text>
              <Text className="text-white text-xl">Order food you love</Text>
            </View>
          </Pressable>

          <View className="flex-row justify-between">
            <Pressable
              onPress={() => navigation.navigate("list_ingredient")}
              className="w-1/2 max-w-[48%] rounded-2xl overflow-hidden bg-white shadow-md"
            >
              <Image
                source={ingredientsLogo}
                className="w-60 h-60"
                resizeMode="cover"
              />
              <View className="absolute bottom-3 left-3">
                <Text className="text-white text-xl">Ingredients</Text>
                <Text className="text-white text-sm">
                  Find recipes with your ingredients
                </Text>
              </View>
            </Pressable>

            <TouchableOpacity className="w-1/2 max-w-[48%] rounded-2xl overflow-hidden bg-white shadow-md">
              <Image
                source={desertsLogo}
                className="w-60 h-60"
                resizeMode="cover"
              />
              <View className="absolute bottom-3 left-3">
                <Text className="text-white  text-xl">Desserts</Text>
                <Text className="text-white text-sm">Something Sweet</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center px-8">
          <Text className="font-bold text-2xl">Explore More</Text>

          <Pressable onPress={() => navigation.navigate("list_recipe")}>
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
        </View>

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
