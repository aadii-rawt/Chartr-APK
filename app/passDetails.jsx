import { MaterialIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../context/UserContext";
import dayjs from "dayjs";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function PassDetails() {
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [selectedPass, setSelectedPass] = useState("AC pass - ₹50.0");
    const navigation = useNavigation();
    const { user } = useContext(UserContext); // Get current user

    const handleSubmit = async () => {
        console.log("clicked");
        
        if (!age || !name || !mobile || !selectedPass) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        // Get current date and formatted time
        const now = dayjs();
        const formattedCreatedAt = now.format("DD MM-YYYY HH:mm:ss"); // Example: "03 03-2025 07:40:35"
        const formattedValidTill = now.endOf("day").format("DD MM-YYYY 23:59:59"); // "03 03-2025 23:59:59"

        const passData = {
            name,
            age,
            mobile,
            selectedPass,
            createdAt: formattedCreatedAt,
            validTill: formattedValidTill
        };

        try {
            const userRef = doc(db, "/pass/JlXZOZgOV3eFndP7VCNMu0uZECJ2");

            // Check if document exists
            const docSnap = await getDoc(userRef);

            if (!docSnap.exists()) {
                // Create new document with an empty pass array
                await setDoc(userRef, { pass: [passData] });
            } else {
                // Document exists, update it (append to pass array)
                const existingData = docSnap.data();
                existingData.pass.push(passData);

                await setDoc(userRef, existingData);
            }

            // navigation.navigate("Home"); // Navigate to home after submission
        } catch (error) {
            console.log("Error", "Could not store pass: " + error.message);
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#006666",
                paddingTop: 20,
                height: "100%"
            }}>
                {/* Back Button */}
                <Link href="" style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </Link>

                {/* Form */}
                <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                    <View style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 28, color: "#fff", marginBottom: 10 }}>Daily Pass</Text>
                        </View>
                        <View style={{ backgroundColor: "#111", borderRadius: 10, width: "90%" }}>
                            <View style={styles.alertBox}>
                                <Text style={styles.alertText}>
                                    This pass is only applicable in DTC buses and not in Cluster buses.
                                </Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.mandatoryText}>Fields marked <Text style={{ color: "red" }}>*</Text> are mandatory.</Text>

                                {/* Age Input */}
                                <Text style={styles.label}>Age <Text style={{ color: "red" }}>*</Text></Text>
                                <TextInput
                                    style={styles.input}
                                    value={age}
                                    onChangeText={setAge}
                                    keyboardType="numeric"
                                    placeholder="Enter your age"
                                />

                                {/* Name Input */}
                                <Text style={styles.label}>Name <Text style={{ color: "red" }}>*</Text></Text>
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder="Enter your name"
                                />

                                {/* Mobile Input */}
                                <Text style={styles.label}>Mobile Number <Text style={{ color: "red" }}>*</Text></Text>
                                <TextInput
                                    style={styles.input}
                                    value={mobile}
                                    onChangeText={setMobile}
                                    keyboardType="numeric"
                                    placeholder="Enter your mobile number"
                                />

                                {/* Pass Type Selection */}
                                <Text style={styles.label}>Select pass type <Text style={{ color: "red" }}>*</Text></Text>
                                <TouchableOpacity style={styles.selectedPass} onPress={() => setSelectedPass("AC pass - ₹50.0")}>
                                    <Text style={styles.selectedPassText}>AC pass - ₹50.0</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    {/* Payment Section */}
                    <View style={{ backgroundColor: "#111", width: "100%", padding: 15, marginTop: 15 }}>
                        <View style={styles.paymentContainer}>
                            <View style={styles.paymentDetails}>
                                <Text style={styles.amountLabel}>Amount payable</Text>
                                <Text style={styles.amountValue}>₹50.0</Text>
                            </View>
                        </View>
                        {/* Pay Button */}
                        <TouchableOpacity style={styles.payButton} onPress={handleSubmit}>
                            <Text style={styles.payButtonText}>PAY ₹50.0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    safeContainer: { flex: 1 },
    backButton: { position: 'absolute', top: 10, left: 10, zIndex: 50 },
    alertBox: { backgroundColor: "#d32f2f", paddingVertical: 8, marginTop: 10 },
    alertText: { color: "#fff", fontSize: 14, textAlign: "center" },
    mandatoryText: { color: "#fff", fontSize: 14, marginBottom: 10 },
    label: { color: "#fff", fontSize: 16, marginBottom: 5, marginTop: 8 },
    input: {
        backgroundColor: "transparent",
        color: "#fff",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        fontSize: 16,
    },
    selectedPass: {
        width: 120,
        backgroundColor: "#d32f2f",
        paddingVertical: 9,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: "white",
        marginTop: 10,
    },
    selectedPassText: { color: "#fff", fontSize: 15, textAlign: "center" },
    paymentContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 },
    amountLabel: { color: "#fff", fontSize: 14 },
    amountValue: { color: "#d32f2f", fontSize: 20, fontWeight: "bold" },
    payButton: { backgroundColor: "#008080", padding: 10, borderRadius: 5, marginTop: 20 },
    payButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center" },
});

