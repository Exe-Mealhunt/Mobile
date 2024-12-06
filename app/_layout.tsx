import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    primary: "#F05193",
  },
  darkColors: {
    primary: "#000000",
  },
  mode: "light",
});

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
