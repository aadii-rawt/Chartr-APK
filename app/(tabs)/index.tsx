import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Tickets from "../components/Tickets";
import Pass from "../components/Pass";
import { useNavigation } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from '@/context/UserContext';
export default function HomeScreen() {
  const navigation = useNavigation()
     const { user } = useContext(UserContext)
     console.log(user);
 
  return (
    <SafeAreaView style={styles.safeContainer}>
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#121212', }}>

    {/*======================= Header =================================== */}
    <View style={{ flexDirection: 'row',paddingHorizontal: 13 , alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth : 1,borderColor : "#1E1E1E" }}>
      {/* <Text style={{ color: '#35559c', fontSize: 24, fontWeight: 'bold' }}>Chartr</Text> */}
      <Image 
        source={{ uri: 'https://framerusercontent.com/images/yEa4ce8bqOfVAhNkZNCbXV3cgd4.png' }} 
style={{width:100, height: 20,}} 
        resizeMode="contain" 
      />
      <TouchableOpacity>
        <MaterialCommunityIcons name="account-circle" size={32} color="white" />
      </TouchableOpacity>
    </View>
    
    <View style={{backgroundColor : "#1B1B1B",borderWidth : 1,borderColor : "#1E1E1E",margin: 13, borderRadius: 10, padding: 5}}>
  {/* ======================= search bar ===================================  */}
    <View style={{ backgroundColor: '#2d2d2d',   borderRadius: 25, flexDirection: 'row', alignItems: 'center', paddingVertical: 5,paddingHorizontal : 20, marginBottom: 10 }}>
      <FontAwesome name="search" size={16} color="white" style={{ marginRight: 10 }} />
      <TextInput
            style={{fontSize : 16, color : "white", outline : "none",}}
            placeholder="Where do you want to go?"
            // value={phoneNumber}
            // onChangeText={(text) => setPhoneNumber(text)}
            placeholderTextColor="#B0B0B0"
          />
      {/* <Text style={{ color: 'white', fontSize: 16 }}>Where do you want to go?</Text> */}
    </View>

    {/*==========================================  Recent Locations==========================================*/}
    <View style={{ borderRadius: 10, padding: 10, marginBottom: 10, }}>
      <View style={{display: "flex",flexDirection : "row", alignItems : "center", gap : 10}}>
      <View style={{borderRadius : 100, backgroundColor : "gray", padding : 5}}>
      <MaterialIcons name="location-on" size={16} color="white" />
      </View>
      <Text style={{ color: 'white', fontSize: 16 }}> AIIMS Urban Health Centre</Text>
      </View>
      {/* 2nd  */}
      <View style={{display: "flex",flexDirection : "row", alignItems : "center", gap : 10,marginTop :20}}>
      <View style={{borderRadius : 100, backgroundColor : "gray", padding : 5}}>
      <MaterialIcons name="location-on" size={16} color="white" />
      </View>
      <Text style={{ color: 'white', fontSize: 16 }}> Ambedkar Nagar Sec-4 (Virat Ci...)</Text>
      </View>
      {/* <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}><MaterialIcons name="location-on" size={16} color="white" /> Ambedkar Nagar Sec-4 (Virat Ci...)</Text> */}
    </View>
    </View>
    
    <View style={{backgroundColor : "#1B1B1B",borderWidth : 1,borderColor : "#1E1E1E",margin: 13, borderRadius: 10, padding: 5,paddingTop: 10}}>
    {/*========================================== Options ========================================== */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10,padding: 5 }}>
      <TouchableOpacity onPress={() => navigation.navigate("buyPass")} style={{ alignItems: 'center' }}>
        <View style={{backgroundColor : "#16262e",padding : 15, borderRadius : 6}}>
        <MaterialCommunityIcons name="ticket" size={35} color="white" />
        </View>
         <Text style={{ color: 'white', fontSize: 16,textAlign : 'center',marginTop: 8 }}>Bus {"\n"} Ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("buyPass")} style={{ alignItems: 'center', position : "relative" }}>
      <View style={{backgroundColor : "#16262e",padding : 15, borderRadius : 6}}>
        <MaterialCommunityIcons name="card-account-details" size={35} color="white" />
        </View>
        <Text style={{ color: 'white', fontSize: 16,textAlign : 'center',marginTop: 8 }}>Daily {"\n"} Pass</Text>
        <Text style={{ color: 'white', fontSize: 15,textAlign : 'center',backgroundColor : "red",paddingHorizontal :"4px",position : "absolute", top : -10,    }}>1-Tap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
      <View style={{backgroundColor : "#16262e",padding : 15, borderRadius : 6}}>
        <MaterialIcons name="route" size={35} color="white" />
        </View>
        <Text style={{ color: 'white', fontSize: 16,textAlign : 'center',marginTop: 8 }}>Route {"\n"} info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
      <View style={{backgroundColor : "#16262e",padding : 15, borderRadius : 6}}>
        <MaterialIcons name="layers" size={35} color="white" />
        </View>
        <Text style={{ color: 'white', fontSize: 16, marginTop: 8 }}>See All</Text>
      </TouchableOpacity>
    </View>
    </View>
    
    {/*==========================================  Wallet ========================================== */}
    <View style={{ backgroundColor: '#1E90FF', borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal:13 }}>
      <Text style={{ color: 'white', fontSize: 16,display : "flex",flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}><MaterialCommunityIcons name="wallet-outline" size={24} color="white" /> Chartr Wallet: ₹0.0</Text>
      <Text style={{ color: 'white',backgroundColor : "red", borderRadius : 10, paddingHorizontal : 5, fontSize: 14 }}>Low Balance</Text>
    </View>
    
    {/* ========================================== Near Me Section ========================================== */}
    <View style={{ marginTop: 10, marginHorizontal: 13,  }}>
      <View>
        <View style={{display : "flex",flexDirection : "row", alignItems : "center", justifyContent : "space-between"}}>
      <Text style={{ color: 'white', fontSize: 18,fontWeight : 500, paddingVertical: 10 }}>Near Me</Text>
      <Text style={{ color: 'white', fontSize: 15,textDecorationLine : "underline", paddingVertical: 10 }}>Show all</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#1A1A1A', borderRadius: 10, padding: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="bus-alert" size={24} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white', fontSize: 16 }}>Fetching...</Text>
      </View>
    </View>
    
    {/* ========================================== Ad Banner ========================================== */}
    <View style={{ backgroundColor: 'white', borderRadius: 0, padding: 10, marginTop: 20,display: "flex", flexDirection: 'row',justifyContent : 'space-between',alignItems: "center", gap: 10 }}>
      <Text style={{ fontSize: 23, fontWeight: 'bold', maxWidth: "70%" }}>Experience Seamless travel with <Text style={{ color: 'red' }}>Delhi Metro</Text></Text>
      <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 5, padding: 5, marginTop: 5, alignSelf: 'flex-start' }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Book Ticket</Text>
      </TouchableOpacity>
    </View>

    <Tickets />
    <Pass />

  </View>
  </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  mainContainer:{
    paddingHorizontal: 10
  }
});
