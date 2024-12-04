import { Stack } from "expo-router";

export default function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F05193",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="detail"
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#000000",
        }}
      />
    </Stack>
  );
}
