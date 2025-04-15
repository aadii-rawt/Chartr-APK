import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Tickets = () => {
    return (
        <View style={{ margin: 13, borderRadius: 10, padding: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, paddingVertical: 10 }}>Tickets</Text>
                <Text style={{ color: 'white', fontSize: 15, paddingVertical: 10, color: "gray" }}>View all tickets</Text>
            </View>

            {/* bus ticket */}

            <View style={{ borderRadius: 10, overflow: "hidden", position: "relative",width : "100%", borderWidth : 0.5, borderColor : "#31363F" }}>
                <View style={{ backgroundColor: "#2E81EB", height: 8 }}></View>
                <View style={{ backgroundColor: "#1B1B1B", padding: 14 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <View style={{ backgroundColor: "#2E81EB", borderRadius: 50, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <MaterialIcons name="directions-bus" size={24} color="white" />
                            </View>
                            <View>
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>427</Text>
                                <Text style={{ color: "gray" }}>DL1PD5048</Text>
                            </View>
                        </View>
                        <Text style={{ color: "white", backgroundColor: "green", paddingHorizontal: 8, paddingVertical: 5, borderRadius: 20 }}>Success</Text>
                    </View>

                    <Text style={{ fontSize: 16, color: "gray", paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: "gray" }}>
                        Pushpa Bhawan - Nehru Place Terminal
                    </Text>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ fontSize: 13, color: "gray", paddingVertical: 16 }}>5 Mar, 25 | 08:00 AM</Text>
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>₹15.0 x 1 = ₹13.75</Text>
                    </View>
                </View>

                {/* Centered "INVALID" Text */}
                <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -70 }, { translateY: -30 }, { rotate: "-10deg" }],
                        color: "#FE4040",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderWidth: 3,
                        // transform : "rotate(20px)",
                        borderColor: "#FE4040",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        opacity: 0.9,
                    }}
                >
                    INVALID
                </Text>
            </View>

        </View>
    )
}

export default Tickets

const styles = StyleSheet.create({})