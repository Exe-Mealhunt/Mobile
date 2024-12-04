import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(explore)"
        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="search1" color={color} />
          ),
          tabBarActiveTintColor: "#F05193",
          tabBarInactiveTintColor: "#B0B0B0",
        }}
      />
      <Tabs.Screen
        name="(favorite)"
        options={{
          headerShown: false,
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="heart" color={color} />
          ),
          tabBarActiveTintColor: "#F05193",
          tabBarInactiveTintColor: "#B0B0B0",
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#F05193",
          tabBarInactiveTintColor: "#B0B0B0",
        }}
      />

      <View className="w-full h-1.5 bg-primary mt-2.5" />
    </Tabs>
  );
}
