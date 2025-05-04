import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import dayjs from "dayjs";

const Pass = () => {
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



    const formatPassDate = (dateString) => {
        if (!dateString) return "Invalid Date";

        // Parse the date string
        const parsedDate = dayjs(dateString, "DD MM-YYYY HH:mm:ss");

        // Format date
        const formattedDate = parsedDate.format("D MMM, | hh:mm A");

        return formattedDate;
    };

    const navigation = useNavigation()
    return (
        <View style={{ marginHorizontal: 13, marginVertical: 0, borderRadius: 10, padding: 5, marginBottom: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, paddingVertical: 0 }}>Bus pass</Text>
                <Text style={{ color: 'white', fontSize: 15, paddingVertical: 0, color: "gray" }}>View all passes</Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate("singlePass")} style={{ borderRadius: 10, overflow: "hidden", position: "relative", marginVertical: 10, }} className='border border-black/20 shadow-sm'>
                {/* <View style={{ backgroundColor: "#D84040", padding: 14, paddingVertical: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: 'white', fontSize: 14, paddingVertical: 0 }}>{passData?.createdAt || "N/A"}</Text>
                    <Text style={{ color: 'white', fontSize: 15, paddingVertical: 0, }}>₹50.0</Text>
                </View>
                <View style={{ backgroundColor: "#1B1B1B", padding: 14, paddingVertical: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", postion: "relative" }}>
                    <Text style={{ color: 'white', fontSize: 14, paddingVertical: 0 }}>Valid till:  {passData?.validTill || "N/A"} </Text>
                </View> */}
                <View  style={{backgroundColor: "#76e0a3a8"}}>
                    <View style={{ padding: 15, borderRadius: 10, backgroundColor : "white" }}>
                        <View style={{ display: "flex", flexDirection: "row", columnGap: 10, }}>
                            <View style={{ borderWidth: 0.1, padding: 5, borderRadius: 5, backgroundColor: "#76e0a3a8" }}>
                                <Text>Success</Text>
                            </View>
                            <View style={{ borderWidth: 0.1, padding: 5, borderRadius: 5, backgroundColor: "green", }}>
                                <Text style={{ color: "white" }}>Expired</Text>
                            </View>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", columnGap: 5, marginTop: 15 }}>
                            <View style={{ borderWidth: 0.1, padding: 5, borderRadius: 5 }}>
                                <Text>DTC</Text>
                            </View>
                            <View style={{ borderWidth: 0.1, padding: 5, borderRadius: 5 }}>
                                <Text>DAILY ALL ROUTE AC PASS</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ backgroundColor: "#76e0a3a8", padding: 5 }}>
                        <Text style={{ textAlign: "center" }}>Click on this ticket to view.</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Pass

const styles = StyleSheet.create({})