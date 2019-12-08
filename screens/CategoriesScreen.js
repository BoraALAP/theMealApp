import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
// import colors from "../../constants/colors";

const CategoriesScreen = props => {
  const onPressed = () => {
    props.navigation.navigate({
      routeName: "CategoryMeals"
    });
  };

  return (
    <Container>
      <Text>Categories Screen</Text>
      <Button title="Go to Meals" onPress={onPressed} />
    </Container>
  );
};

export default CategoriesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
