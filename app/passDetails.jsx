import { MaterialIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PassDetails() {
    const [age, setAge] = useState("20");
    const [name, setName] = useState("aditya rawat");
    const [mobile, setMobile] = useState("9599518124");
    const [selectedPass, setSelectedPass] = useState("AC pass - ₹50.0");
    const navigation = useNavigation()

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
                {/* Back Arrow */}
                <Link href="" style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </Link>

                {/* Header */}

                <View style={{ position: "absolute", bottom: 0, width: "100%" }}>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: 'center', }}>
                        <View>
                            <Text style={{ fontSize: 28, color: "#fff", marginBottom: 10, textAlign: "left" }}>Daily Pass</Text>
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
                                    style={{ ...styles.input, outline: "none" }}
                                    value={age}
                                    onChangeText={setAge}
                                    keyboardType="numeric"
                                    placeholder="Enter your age"
                                />

                                {/* Name Input */}
                                <Text style={styles.label}>Name <Text style={{ color: "red" }}>*</Text></Text>
                                <TextInput
                                    style={{ ...styles.input, outline: "none" }}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder="Enter your name"
                                />

                                {/* Mobile Input */}
                                <Text style={styles.label}>Mobile Number <Text style={{ color: "red" }}>*</Text></Text>
                                <TextInput
                                    style={{ ...styles.input, outline: "none" }}
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
                            <View style={styles.passTypeBadge}>
                                <Text style={styles.passTypeText}>AC</Text>
                            </View>
                        </View>
                        {/* Pay Button */}
                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>PAY 50.0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}

// CSS Styles
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#006666",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 50,
    },
    backArrow: {
        fontSize: 28,
        color: "#fff",
    },
    alertBox: {
        backgroundColor: "#d32f2f",
        paddingVertical: 8,
        // borderRadius: 5,
        marginTop: 10,
    },
    alertText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
    },
    mandatoryText: {
        color: "#fff",
        fontSize: 14,
        marginBottom: 10,
    },
    label: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 5,
        marginTop: 8,
    },
    input: {
        backgroundColor: "transparent",
        color: "#fff",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        outline: "none",
        fontSize: 16,
    },
    selectedPass: {
        width: 120,
        backgroundColor: "#d32f2f",
        paddingVertical: 9,
        paddingHorizontal: 5,
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: "white",
        marginTop: 10,
    },
    selectedPassText: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
    },
    paymentContainer: {
        backgroundColor: "#111",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        borderRadius: 10,
    },
    paymentDetails: {
        flexDirection: "column",
    },
    amountLabel: {
        color: "#fff",
        fontSize: 14,
    },
    amountValue: {
        color: "#d32f2f",
        fontSize: 20,
        fontWeight: "bold",
    },
    passTypeBadge: {
        backgroundColor: "#d32f2f",
        paddingVertical: 5,
        paddingHorizontal: 10,
        // borderRadius: 5,
    },
    passTypeText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    payButton: {
        backgroundColor: "#008080",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    payButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

