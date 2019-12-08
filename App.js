import React, { useState } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "unna-bold": require("./assets/fonts/Unna-Bold.ttf"),
    "unna-regular": require("./assets/fonts/Unna-Regular.ttf"),
    "muli-bold": require("./assets/fonts/Muli-Bold.ttf"),
    "muli-semiBold": require("./assets/fonts/Muli-SemiBold.ttf"),
    "muli-regular": require("./assets/fonts/Muli-Regular.ttf"),
    "muli-light": require("./assets/fonts/Muli-Light.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return <MealsNavigator />;
}
