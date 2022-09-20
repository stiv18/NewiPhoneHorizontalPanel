import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HorizontalPanel from "./HorizontalPanel";

const HorizontalPanelHandler = (props) => {
    return (
        <TouchableOpacity
            style={{
                width: "87%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
            }}
            onPress={props.onPress}
        >
            <Text
                style={{
                    color: "white",
                    fontSize: 19,
                    fontWeight: "400",
                    textAlign: "right",
                    marginRight: 16,
                    maxWidth: 250
                }}
            >
                See why the new Super Retina XDR display is like nothing else
            </Text>
            <Ionicons name="arrow-forward-circle-sharp" size={50} color="orange" />
        </TouchableOpacity>
    );
};

export default HorizontalPanelHandler;