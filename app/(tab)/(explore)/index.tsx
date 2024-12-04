import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import homeBar from "../../../assets/images/home-bar.png";

export default function ExploreScreen() {
  return (
    <ScrollView className="bg-white">
      <ImageBackground
        source={homeBar}
        style={{ width: "100%", height: 150, backgroundColor: "#F05193" }}
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl font-bold">Header</Text>
        </View>
      </ImageBackground>

      <Text>Explore</Text>
      <Link href="/detail">View details</Link>
    </ScrollView>
  );
}
