import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Easing } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MagicButton = props => {
    
    const iconAnim = useRef(new Animated.Value(-250)).current;
    const textOpacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(iconAnim, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true,
                easing: Easing.cubic
            }),
            Animated.timing(textOpacityAnim, {
                toValue: 1,
                duration: 1800,
                useNativeDriver: true,
                easing: Easing.ease
            })
        ]).start()
    }, [])

    return (
        <View style={styles.box}>
            <Animated.Text style={[styles.text, {opacity: textOpacityAnim}]}>See why the new Retina XDR display is like nothing else</Animated.Text>
            <Animated.View style={{transform: [{translateX: iconAnim}]}}>
                <Ionicons onPress={props.onPress} name="arrow-forward-circle-sharp" size={64} color="white" />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 16
    },
    text: {
        color: "white",
        fontSize: 19,
        fontWeight: "400",
        width: "100%",
        maxWidth: 200,
        textAlign: "right",
        marginRight: 16
    }
});

export default MagicButton;