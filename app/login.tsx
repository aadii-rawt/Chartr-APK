import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import { useNavigation, useRouter } from "expo-router";
// Firebase Config (Replace with your Firebase project credentials)
// Your web app's Firebase configura

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigation()
    const router = useRouter();
    const handleLogin = async () => {
        if (!email || !password) {
            alert("Error Please enter email and password.");
            return;
        }
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            const user = userCredential.user;
            setUser(user)
            router.push('/')
        } catch (error : any) {
            console.log("Login Failed", error.message);
        }
        setLoading(false);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20,backgroundColor : "white" }} className="bg-white">
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "black" }}>Login</Text>

            <TextInput
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                    width: "100%",
                    padding: 12,
                    color: "black",
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 8,
                    marginBottom: 10,
                }}
            />
            <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{
                    width: "100%",
                    color: 'black',
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 8,
                    marginBottom: 10,
                }}
            />

            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: "#007bff",
                    padding: 15,
                    borderRadius: 8,
                    width: "100%",
                    alignItems: "center",
                }}
            >
                {loading ? <ActivityIndicator color="white" /> : <Text style={{ color: "white", fontSize: 16 }}>Login</Text>}
            </TouchableOpacity>

        </View>
    );
};

export default Login;
