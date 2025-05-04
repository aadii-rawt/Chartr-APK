import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import dayjs from "dayjs";
// import QR from '../assets/images/qrcode.jpg'

// Initialize Firestore
const db = getFirestore();

const Singlepass = () => {
    const { user } = useContext(UserContext); // Get current authenticated user
    const [passData, setPassData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showQR, setShowQR] = useState(false)
    const now = dayjs();
    const nowde = dayjs().hour(7).minute(6).second(0);

    // Format it as "DD MMM, YY | hh:mm A"
    const formattedCreatedAt = nowde.format("DD MMM, YY | hh:mm A");

    const formattedValidTill = now.endOf("day").format("DD MMM, YY | hh:mm A");
    const idDate = dayjs().format('DDMMYYYY');


    useEffect(() => {
        const fetchPassData = async () => {
            // if (!user) return;

            try {
                const userRef = doc(db, "/pass/JlXZOZgOV3eFndP7VCNMu0uZECJ2");
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {

                    const data = docSnap.data();
                    if (data.pass.length > 0) {
                        console.log("data :", data.pass);
                        setPassData(data.pass[data.pass.length - 1]); // Get latest pass
                    }
                } else {
                    console.log("No pass found!");
                }
            } catch (error) {
                console.error("Error fetching pass:", error);
            }
            setLoading(false);
        };

        fetchPassData();

    }, []);

    // if (loading) {
    //     return (
    //         <View style={styles.loader}>
    //             <ActivityIndicator size="large" color="#fff" />
    //         </View>
    //     );
    // }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={{ backgroundColor: "#D84040", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {!showQR ?
                    <View style={{ backgroundColor: "#fff", padding: 14, minWidth: "90%", borderRadius: 8 }}>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: "500", textAlign: "center" }}>Transport Dept. of Delhi</Text>

                        <View style={{ ...styles.flex, paddingVertical: 13 }} className="border-b border-black">
                            <Text style={{ color: "black", fontSize: 18 }}>DAILY ALL ROUTE AC PASS</Text>
                            <Text style={{ color: "black", fontSize: 18 }}>{passData?.selectedPass || "₹50.0"}</Text>
                        </View>

                        <View style={{ ...styles.flex, paddingTop: 8 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>Passenger Name</Text>
                            <Text style={{ color: "black", fontSize: 15 }}>Fare</Text>
                        </View>

                        <View style={{ ...styles.flex, paddingVertical: 0 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>{passData?.name || "Aditya Rawat"}</Text>
                            <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>{passData?.selectedPass || "₹50.0"}</Text>
                        </View>

                        <View style={{ paddingTop: 8 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>Passenger Age</Text>
                            <Text style={{ color: "black", fontSize: 17 }}>{passData?.age || "20"}</Text>
                        </View>

                        <View style={{ paddingTop: 8 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>Booking Time</Text>
                            <Text style={{ color: "black", fontSize: 17 }}>{passData?.createdAt || formattedCreatedAt}</Text>
                        </View>

                        <View style={{ paddingTop: 8 }}>
                            <Text style={{ color: "black", fontSize: 15 }}>Validity Time</Text>
                            <Text style={{ color: "black", fontSize: 17 }}>{passData?.validTill || formattedValidTill}</Text>
                        </View>

                        <Text style={{ color: "gray", fontSize: 15, textAlign: "center", paddingVertical: 8 }}>DL{idDate}rfr6kdae</Text>
                        <TouchableOpacity onPress={() => setShowQR(!showQR)} style={{ padding: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }} className="bg-green-300 text-green-600 border-[1.5px] border-green-800 rounded-md">
                            <MaterialIcons name="qr-code-2" size={28} color="green" />
                            <Text style={{  textAlign: "center", fontSize: 15 }} className="text-green-800 font-medium">Show QR Code</Text>
                        </TouchableOpacity>

                        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={{ uri: "https://upload.wikimedia.org/wikipedia/en/f/fb/Delhi_Transport_Corporation_logo.png" }}
                                style={{ width: 100, height: 24, tintColor: "black", marginTop: 15 }}
                                resizeMode="contain"
                            />
                        </View>
                    </View> :
                    <View style={{ backgroundColor: "#1B1B1B", padding: 0, minWidth: "90%", borderRadius: 8 }}>
                        <TouchableOpacity onPress={() => setShowQR(!showQR)}>
                            <Image
                                source={require("../assets/images/qrcode.png")}
                                style={{ width: 350, height: 350 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                }

                <View className="mt-5 bg-yellow-100 w-[90%] mx-14 text-centers rounded-md" >
                    <Text className="text-center py-2">This pass is valid in DTC buses only.</Text>
                </View>

                <View style={{ ...styles.flex, width: "95%", position: "absolute", top: 15 }}>
                    <Link href="">
                        <MaterialIcons name="cancel" size={22} color="white" />
                    </Link>
                    <TouchableOpacity style={{ ...styles.flex, gap: 5 }}>
                        <MaterialIcons name="access-time" size={22} color="white" />
                        <Text style={{ color: "white", fontSize: 14 }}>All Passes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Singlepass;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D84040",
    },
});
