import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, TextInput } from "react-native";
import { Camera } from "expo-camera";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import QRCodeScanner from "react-native-qrcode-scanner";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import dayjs from "dayjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { UserContext } from "@/context/UserContext";

export default function DailyPass() {

  const [name, setName] = useState<string>("")
  const [mobile, setMobile] = useState<string>("")
  const [age, setAge] = useState<string>("")
    const { user } = useContext(UserContext); // Get current user

  const navigation = useNavigation()


  const handleSubmit = async () => {
    console.log("clicked");

    if (!age || !name || !mobile ) {
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

      navigation.navigate("singlePass");
      // navigation.navigate("Home"); // Navigate to home after submission
    } catch (error: any) {
      console.log("Error", "Could not store pass: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View></View>

        <View style={{ backgroundColor: "white", paddingTop: 10, borderRadius: 8, overflow: "hidden" }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: 500 }}>Pass Details</Text>
            <Text style={{ marginTop: 3, fontSize: 13 }}>Choose Bus color</Text>

            <View style={{ display: "flex", flexDirection: "row", columnGap: 10, width: "100%", justifyContent: "flex-start", marginVertical: 5 }}>
              <View style={{ backgroundColor: "green", borderRadius: 3, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 3, padding: 4 }}>
                <FontAwesome name="bus" color={"white"} />
                <Text style={{ color: "white", fontWeight: 500, fontSize: 14, }}>Green Bus</Text>
              </View>
              <View style={{ backgroundColor: "red", borderRadius: 3, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 3, padding: 4 }}>
                <FontAwesome name="bus" color={"white"} />
                <Text style={{ color: "white", fontWeight: 500, fontSize: 14, }}>Red Bus</Text>
              </View>
              <View style={{ backgroundColor: "blue", borderRadius: 3, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: 3, padding: 4 }}>
                <FontAwesome name="bus" color={"white"} />
                <Text style={{ color: "white", fontWeight: 500, fontSize: 14, }}>Electric Bus</Text>
              </View>
            </View>

            <Text style={{ marginTop: 3, fontSize: 14 }}>Pass valid in</Text>
            <View style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
              <View>
                <Text>Green Bus</Text>
              </View>
              <View>
                <Text>Red Bus</Text>
              </View>
              <View>
                <Text>Electric Bus</Text>
              </View>
              <View style={{ backgroundColor: "green", padding: 5, borderRadius: 3 }}>
                <FontAwesome name="bus" color={"white"} />
              </View>
              <View style={{ backgroundColor: "red", padding: 5, borderRadius: 3 }}>
                <FontAwesome name="bus" color={"white"} />
              </View>
              <View style={{ backgroundColor: "blue", padding: 5, borderRadius: 3 }}>
                <FontAwesome name="bus" color={"white"} />
              </View>
            </View>

            <Text style={{ marginTop: 3, fontSize: 14 }}>Valid Till</Text>
            <View style={{ backgroundColor: "", borderColor: "gray", borderWidth: 0.2, padding: 5, paddingHorizontal: 10, borderRadius: 5 }}>
              <Text>23:39, 30/02/2024</Text>
            </View>

            <Text style={{ marginTop: 3, fontSize: 14 }}>Pass Fare</Text>
            <View style={{ backgroundColor: "", borderColor: "gray", borderWidth: 0.2, padding: 5, paddingHorizontal: 10, borderRadius: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>₹50.0</Text>
            </View>

          </View>
          <View style={{ backgroundColor: "yellow", padding: 5, marginTop: 10 }}>
            <Text style={{ textAlign: "center" }}>This Pass is valid in DTC buses only.</Text>
          </View>
        </View>

        <View style={{ padding: 10, backgroundColor: "white", marginTop: 30, borderRadius: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>Personal Details</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={{ padding: 10, paddingHorizontal: 10, marginVertical: 4, borderColor: "gray", borderWidth: 0.2, borderRadius: 8 }} placeholder="Enter your name" placeholderTextColor="gray" />
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
            style={{ padding: 10, paddingHorizontal: 10, marginVertical: 4, borderColor: "gray", borderWidth: 0.2, borderRadius: 8 }} placeholder="Enter phone number" placeholderTextColor="gray" />
          <TextInput
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={{ padding: 10, paddingHorizontal: 10, marginVertical: 4, borderColor: "gray", borderWidth: 0.2, borderRadius: 8 }} placeholder="Enter your age" placeholderTextColor="gray" />
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", bottom: 0, left: 0, width: "100%", padding: 10 }}>
          <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "blue", padding: 15, borderRadius: 5 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Pay ₹50.0</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    padding: 15,
    position: "relative"
  },
  camera: {
    flex: 1,
  },
  marker: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#121212",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  busButton: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    margin: 5,
  },
  busText: {
    color: "#fff",
    fontSize: 16,
  },
  otpInput: {
    width: "80%",
    height: 60,
    marginTop: 10,
  },
});

