import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const HorizontalPanel = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                    <View style={styles.itemsContainer}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>For those bright, sunshiny days, the Super Retina XDR display now reaches a peak of 2000 nits outdoors — that’s twice as bright as before and the highest peak brightness of any smartphone. So text jumps right off the screen.</Text>
                            <Image style={{width: 250, height: 550}} resizeMode="contain" source={{uri: "https://www.apple.com/v/iphone-14-pro/a/images/overview/display/deep-dive/display_1__fy8pduduyeqa_small_2x.jpg"}} />
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Photos and HDR videos get a big boost, too — up to 1600 nits peak brightness, bringing iPhone to the same level as the Pro Display XDR. Movies, shows, and even the films you’ve shot on iPhone look more true to life than ever.</Text>
                            <Image style={{width: 550, height: 400}} resizeMode="contain" source={{uri: "https://www.apple.com/v/iphone-14-pro/a/images/overview/display/deep-dive/display_2__f9e9fltniniq_small_2x.jpg"}} />
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ProMotion technology allows for variable refresh rates from 10 to 120 times per second. It smoothly and intelligently ramps up when you need exceptional graphics performance, and ramps down to save power when you don’t. Game on, gamers.</Text>
                            <View style={{width: 650, height: 250}}></View>
                        </View>
                        <Image style={{width: 800, height: 550, position: "absolute", bottom: 10, right: 16, zIndex: 0}} resizeMode="contain" source={{uri: "https://www.apple.com/v/iphone-14-pro/a/images/overview/display/deep-dive/display_3__e26ff1nthagm_small_2x.jpg"}} />
                    </View>
            </ScrollView>
            <View style={styles.menuBottom}>
                <View style={styles.menuBottomContainer}>
                    <AntDesign onPress={props.onClosePress} style={{opacity: 0.5}} name="closecircle" size={40} color="white" />
                    <View style={styles.slider} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    itemsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 48,
        zIndex: 1000
    },
    itemText: {
        color: "white",
        padding: 32,
        maxWidth: 300,
        fontSize: 21,
        fontWeight: "600",
    },
    itemIcon: {
        backgroundColor: "violet",
        height: 40,
        width: 40,
    },
    menuBottom: {
        position: "absolute",
        bottom: 0,
        left: 16,
        right: 16,
        height: 100
    },
    menuBottomContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    slider: {
        flex: 0.9,
        height: 2,
        backgroundColor: "white"
    }
})

export default HorizontalPanel;