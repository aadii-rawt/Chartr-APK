import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, TextInput } from "react-native";
import { Camera } from "expo-camera";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import QRCodeScanner from "react-native-qrcode-scanner";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BuyPass() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [busNumber, setBusNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '',]);

  const navigation = useNavigation()

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // const handleQRCodeScanned = (e) => {
  //   setScanned(true);
  //   Alert.alert("QR Code Scanned", e.data);
  //   setBusNumber(e.data);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting camera permission...</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Automatically focus on the next input if a digit is entered
    if (value && index < 3) {
      const nextInput = index + 1;
      otpInputRefs[nextInput].focus();
    }
    if (index == 3) {
      setTimeout(() => {
        navigation.navigate("passDetails")

      }, 1000);

    }
  };

  const otpInputRefs = [];


  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* QR Code Scanner */}
        {/* <QRCodeScanner
        onRead={handleQRCodeScanned}
        reactivate={true}
        reactivateTimeout={2000}
        showMarker={true}
        markerStyle={styles.marker}
        cameraStyle={styles.camera}
      /> */}
        {/* <QRCodeScanner
         onRead={(e) => Alert.alert("QR Code Scanned", e.data)}
         showMarker
       /> */}

        {/* Bus Number Input Section */}
        <View style={styles.bottomSheet}>
          <Text style={styles.heading}>Enter Bus Number</Text>
          <View style={styles.buttonRow}>
            {["DL1PC", "DL1PD", "DL1PB", "DL51GD", "DL51EV"].map((bus, index) => (
              <TouchableOpacity key={index} style={styles.busButton} onPress={() => setBusNumber(bus)}>
                <Text style={styles.busText}>{bus.includes("51") ? "⚡" : ""} {bus}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* OTP Style Input */}
          {/* <CodeField
          value={busNumber}
          onChangeText={setBusNumber}
          cellCount={4}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
        /> */}
          <View style={{ marginVertical: 20, display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
            {/* <TextInput keyboardType="number-pad" style={{backgroundColor : "#1e1e1e", outline : "none", width : "50px", height : "50px", borderRadius : "8px", color : "white", textAlign : "center",fontSize: 26}} maxLength={1}/>
        <TextInput keyboardType="number-pad" style={{backgroundColor : "#1e1e1e", outline : "none", width : "50px", height : "50px", borderRadius : "8px", color : "white", textAlign : "center",fontSize: 26}} maxLength={1}/>
        <TextInput keyboardType="number-pad" style={{backgroundColor : "#1e1e1e", outline : "none", width : "50px", height : "50px", borderRadius : "8px", color : "white", textAlign : "center",fontSize: 26}} maxLength={1}/>
        <TextInput keyboardType="number-pad" style={{backgroundColor : "#1e1e1e", outline : "none", width : "50px", height : "50px", borderRadius : "8px", color : "white", textAlign : "center",fontSize: 26}} maxLength={1}/> */}

            {otp.map((digit, index) => (
              <View key={index} style={{ borderRadius: 8, overflow: "hidden", width: "50px", height: "50px", backgroundColor: "#1e1e1e" }}>
                <TextInput
                  style={{ backgroundColor: "#1e1e1e", outline: "none", width: 50, height: 50, color: "white", textAlign: "center", fontSize: 26, display: "flex", alignItems: 'center', justifyContent: "center" }}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  ref={(ref) => (otpInputRefs[index] = ref)}
                />
              </View>
            ))}
          </View>
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
    backgroundColor: "#000",
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


// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from "react-native";
// import { Camera } from "expo-camera";
// // // import QRCodeScanner from "react-native-qrcode-scanner";
// import OTPInputView from "react-native-otp-inputs";

// export default function BuyPass() {
//   const [hasPermission, setHasPermission] = useState(null);

//   useEffect(() => {
//     if (Platform.OS === "web") {
//       setHasPermission(false); // Disable camera on web
//     } else {
//       (async () => {
//         const { status } = await Camera.requestCameraPermissionsAsync();
//         setHasPermission(status === "granted");
//       })();
//     }
//   }, []);

// //   if (Platform.OS === "web") {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.errorText}>QR Scanner is not supported on web.</Text>
// //       </View>
// //     );
// //   }

//   if (hasPermission === null) {
//     return <Text>Requesting camera permission...</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <QRCodeScanner
//         onRead={(e) => Alert.alert("QR Code Scanned", e.data)}
//         showMarker
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   errorText: { fontSize: 18, fontWeight: "bold", color: "red" },
// });
