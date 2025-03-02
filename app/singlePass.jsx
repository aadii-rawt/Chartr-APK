import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
// import DTCLogo from "../assets/images/dtc-logo.png";

const Singlepass = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
        <View style={{ backgroundColor: "#D84040", height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
            {/* <Text>Singlepass</Text> */}
            <View style={{ backgroundColor: "#1B1B1B", padding: 14, minWidth: "90%", borderRadius: 8 }} >
                <Text style={{ color: "white", fontSize: 20,fontWeight : 500, textAlign: "center" }} >Transport Dept. of Delhi</Text>
                <View style={{ ...styles.flex, paddingVertical: 13 }}>
                    <Text style={{ color: "white", fontSize: 18,  }} >DTC Daily Pass</Text>
                    <Text style={{ color: "white", fontSize: 18,  }} >₹50.0</Text>
                </View>
                {/* <hr style={{width : "100%", color : "black", backgroundColor : 'black'}}/> */}
                <View style={{ ...styles.flex, paddingTop: 8 }}>
                    <Text style={{ color: "white", fontSize: 15, }} >Passenger Name</Text>
                    <Text style={{ color: "white", fontSize: 15, }} >Pass Type</Text>
                </View>
                <View style={{ ...styles.flex, paddingVertical: 0 }}>
                    <Text style={{ color: "white", fontSize: 15, }} >Aditya Rawat</Text>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: 500 }} >AC</Text>
                </View>
                <View style={{ paddingTop: 8 }}>
                    <Text style={{ color: "white", fontSize: 15, }} >Passenger Age</Text>
                    <Text style={{ color: "white", fontSize: 17, }} >20</Text>
                </View>
                <View style={{ paddingTop: 8 }}>
                    <Text style={{ color: "white", fontSize: 15, }} >Booking Time</Text>
                    <Text style={{ color: "white", fontSize: 17, }} >03 03-2025 07:40:35</Text>
                </View>
                <View style={{ paddingTop: 8 }}>
                    <Text style={{ color: "white", fontSize: 15, }} >Validity Time</Text>
                    <Text style={{ color: "white", fontSize: 17, }} >03 03-2025 23:59:59</Text>
                </View>
                <Text style={{ color: "gray", fontSize: 15, textAlign: "center", paddingVertical: 8 }} >DL15022025ruhfr6kdae</Text>

                <TouchableOpacity style={{ backgroundColor: "#D84040", padding: 5,display: 'flex', flexDirection : "row", alignItems: "center", justifyContent: 'center', gap: 5 }}>
                    <MaterialIcons name="qr-code-2" size={28} color="white" />
                    <Text style={{
                        color: "white", textAlign: "center", fontSize: 15,}}>Show QR Code</Text>
                </TouchableOpacity>

                <Text style={{ color: "white", textAlign: "center", fontSize: 16, paddingTop: 8 }}>Valid in AC and Non-AC DTC buses.</Text>
                <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Non-Transferable Pass</Text>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/en/f/fb/Delhi_Transport_Corporation_logo.png" }}
                        style={{ width: 100, height: 24, tintColor: "white", marginTop: 15 }}
                        resizeMode="contain"
                    />
                </View>


                {/* <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -100 }, { translateY: -40 }, { rotate: "-10deg" }],
                        color: "#FE4040",
                        fontWeight: "bold",
                        fontSize: 50,
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

            <View style={{ ...styles.flex, width: "95%", position: "absolute", top: 15 }}>
                <Link href="" ><MaterialIcons name="cancel" size={22} color="white" /></Link>
                <TouchableOpacity style={{ ...styles.flex, gap: 5, }}><MaterialIcons name="access-time" size={22} color="white" /><Text style={{ color: 'white', fontSize: 14 }}>All Passes</Text> </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default Singlepass

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
      },
    flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})