import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [flexGrowValue, setFlexGrowValue] = useState(0);
  const [flexShrinkValue, setFlexShrinkValue] = useState(0);
  const [textArray, setTextArray] = useState([]);

  return (
    <Screen>
      <TextInput
        value={textValue}
        onChangeText={(text) => setTextValue(text)}
        style={{
          height: 40,
          width: "80%",
          alignSelf: "center",
          backgroundColor: colors.secondary,
          padding: 5,
          borderRadius: 10,
        }}
        placeholder="Add text here"
        placeholderTextColor="white"
      />
      <TextInput
        value={flexGrowValue}
        onChangeText={(text) => setFlexGrowValue(text)}
        style={{
          height: 40,
          width: "80%",
          alignSelf: "center",
          backgroundColor: colors.secondary,
          padding: 5,
          borderRadius: 10,
          marginVertical: 5,
        }}
        keyboardType="numeric"
        placeholder="Add Flex Grow here"
        placeholderTextColor="white"
      />
      <TextInput
        value={flexShrinkValue}
        onChangeText={(text) => setFlexShrinkValue(text)}
        style={{
          height: 40,
          width: "80%",
          alignSelf: "center",
          backgroundColor: colors.secondary,
          padding: 5,
          borderRadius: 10,
        }}
        keyboardType="numeric"
        placeholder="Add Flex Shrink here"
        placeholderTextColor="white"
      />
      <Button
        title="Add Image"
        style={{ backgroundColor: colors.primary }}
        onPress={() =>
          setTextArray([
            ...textArray,
            {
              body: textValue,
              flex_grow: flexGrowValue,
              flex_shrink: flexShrinkValue,
            },
          ])
        }
      />
      <View
        style={{
          flexDirection: "row",
          width: "70%",
          height: 150,
          borderWidth: 2,
          borderColor: "red",
          alignSelf: "center",
          // flexWrap: "wrap",
        }}
      >
        {textArray.map((value) => (
          <Text
            style={{
              flexGrow: value.flex_grow,
              flexShrink: value.flex_shrink,
              backgroundColor: "yellow",
              marginHorizontal: 2,
            }}
          >
            {value.body}
          </Text>
        ))}
      </View>
    </Screen>
  );
}
