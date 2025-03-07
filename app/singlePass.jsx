import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";

// Initialize Firestore
const db = getFirestore();

const Singlepass = () => {
    const { user } = useContext(UserContext); // Get current authenticated user
    const [passData, setPassData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPassData = async () => {
            // if (!user) return;

            try {
                const userRef = doc(db, "/pass/JlXZOZgOV3eFndP7VCNMu0uZECJ2");
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    
                    const data = docSnap.data();
                    if (data.pass.length > 0) {
                        console.log( "data :", data.pass);
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
                <View style={{ backgroundColor: "#1B1B1B", padding: 14, minWidth: "90%", borderRadius: 8 }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "500", textAlign: "center" }}>Transport Dept. of Delhi</Text>

                    <View style={{ ...styles.flex, paddingVertical: 13 }}>
                        <Text style={{ color: "white", fontSize: 18 }}>DTC Daily Pass</Text>
                        <Text style={{ color: "white", fontSize: 18 }}>{passData?.selectedPass || "N/A"}</Text>
                    </View>

                    <View style={{ ...styles.flex, paddingTop: 8 }}>
                        <Text style={{ color: "white", fontSize: 15 }}>Passenger Name</Text>
                        <Text style={{ color: "white", fontSize: 15 }}>Pass Type</Text>
                    </View>

                    <View style={{ ...styles.flex, paddingVertical: 0 }}>
                        <Text style={{ color: "white", fontSize: 15 }}>{passData?.name || "N/A"}</Text>
                        <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>{passData?.selectedPass.includes("AC") ? "AC" : "Non-AC"}</Text>
                    </View>

                    <View style={{ paddingTop: 8 }}>
                        <Text style={{ color: "white", fontSize: 15 }}>Passenger Age</Text>
                        <Text style={{ color: "white", fontSize: 17 }}>{passData?.age || "N/A"}</Text>
                    </View>

                    <View style={{ paddingTop: 8 }}>
                        <Text style={{ color: "white", fontSize: 15 }}>Booking Time</Text>
                        <Text style={{ color: "white", fontSize: 17 }}>{passData?.createdAt || "N/A"}</Text>
                    </View>

                    <View style={{ paddingTop: 8 }}>
                        <Text style={{ color: "white", fontSize: 15 }}>Validity Time</Text>
                        <Text style={{ color: "white", fontSize: 17 }}>{passData?.validTill || "N/A"}</Text>
                    </View>

                    <Text style={{ color: "gray", fontSize: 15, textAlign: "center", paddingVertical: 8 }}>DL15022025ruhfr6kdae</Text>

                    <TouchableOpacity style={{ backgroundColor: "#D84040", padding: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
                        <MaterialIcons name="qr-code-2" size={28} color="white" />
                        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>Show QR Code</Text>
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
