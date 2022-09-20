import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';
import HorizontalPanel from './components/HorizontalPanel';
import { showHorizontalPanelFullAnimation, dismissHorizontalPanelFullAnimation } from "./components/HorizontalPanelAnimated.js";
import HorizontalPanelHandler from './components/HorizontalPanelHandler';
import MagicButton from "./components/MagicButton";

export default function App() {

  const leftPosition = useRef(new Animated.Value(Dimensions.get("screen").width)).current;
  const leftPositionContainer = useRef(new Animated.Value(0)).current;

  const onPressHandler = () => {
    showHorizontalPanelFullAnimation(leftPositionContainer, leftPosition, 300, () => console.log("animated"))
  };

  const onClosePress = () => {
    dismissHorizontalPanelFullAnimation(leftPositionContainer, leftPosition, 0, () => console.log("dimsinss"))
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, {transform: [{translateX: leftPositionContainer}]}]}>
        <MagicButton onPress={onPressHandler}/>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            transform: [{
              translateX: leftPosition
            }]
          }}
        >
          <HorizontalPanel onClosePress={onClosePress} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
