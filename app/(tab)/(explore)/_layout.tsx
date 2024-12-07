import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "./index";
import ListRecipeScreen from "./list_recipe";

const Stack = createStackNavigator();

export default function ExploreLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="list_recipe"
        component={ListRecipeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
