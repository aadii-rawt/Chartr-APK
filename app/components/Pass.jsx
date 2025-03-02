import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'

const Pass = () => {

    const navigation = useNavigation()
    return (
        <View style={{ marginHorizontal: 13, marginVertical: 0, borderRadius: 10, padding: 5, marginBottom : 20 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, paddingVertical: 0 }}>Pass</Text>
                <Text style={{ color: 'white', fontSize: 15, paddingVertical: 0, color: "gray" }}>View pass</Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate("singlePass")} style={{ borderRadius: 10, overflow: "hidden", position: "relative", marginVertical: 10, borderWidth : 0.5, borderColor : "#31363F" }}>
                <View style={{ backgroundColor: "#D84040", padding: 14, paddingVertical: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: 'white', fontSize: 14, paddingVertical: 0 }}>3 Mar, | 07:53 AM</Text>
                    <Text style={{ color: 'white', fontSize: 15, paddingVertical: 0, }}>₹50.0</Text>
                </View>
                <View style={{ backgroundColor: "#1B1B1B", padding: 14, paddingVertical: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",postion : "relative" }}>
                    <Text style={{ color: 'white', fontSize: 14, paddingVertical: 0 }}>Valid till:   3 Mar, 25 | 11:59 PM </Text>


                    {/* Centered "INVALID" Text */}
                    {/* <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -70 }, { translateY: -40 }, { rotate: "-10deg" }],
                        color: "#FE4040",
                        fontWeight: "bold",
                        fontSize: 25,
                        borderWidth: 3,
                        // transform : "rotate(20px)",
                        borderColor: "#FE4040",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        opacity: 0.9,
                    }}
                >
                    INVALID
                </Text> */}
                </View>


            </TouchableOpacity>

        </View>
    )
}

export default Pass

const styles = StyleSheet.create({})