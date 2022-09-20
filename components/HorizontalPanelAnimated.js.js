import React from "react";
import { Animated, Easing, Dimensions } from "react-native";

export const showHorizontalPanelFullAnimation = (containerValue, horizontalPanelValue, offset=0, callback) => {
   
    Animated.parallel([
        Animated.timing(containerValue, {
            toValue: -offset,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear
        }),
        Animated.timing(horizontalPanelValue, {
            toValue: offset,
            duration: 700,
            useNativeDriver: true,
            ease: Easing.linear
        }),
    ]).start(callback);  

};

export const dismissHorizontalPanelFullAnimation = (containerValue, horizontalPanelValue, offset = 0, callback) => {
   
    Animated.parallel([
        Animated.timing(containerValue, {
            toValue: offset,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear
        }),
        Animated.timing(horizontalPanelValue, {
            toValue: Dimensions.get("screen").width,
            duration: 500,
            useNativeDriver: true,
            ease: Easing.linear
        }),
    ]).start(callback);  

};

export const showHorizontalPanel = (value, callback) => {
    Animated.timing(value, {
        toValue: 200,
        duration: 700,
        useNativeDriver: true,
        ease: Easing.back
    }).start(callback);
};

export const dismissHorizontalPanel = (value, callback) => {
    Animated.timing(value, {
        toValue: 1000,
        duration: 700,
        useNativeDriver: true,
        ease: Easing.bounce
    }).start(callback);
};