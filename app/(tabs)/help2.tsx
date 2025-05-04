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
        <View style={{ flex: 1, backgroundColor: '#FBFBFB', }}>

          {/*======================= Header =================================== */}
          <View style={{
            flexDirection: 'row', paddingHorizontal: 13, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, elevation: 5,
            shadowColor: 'black',
          }}>
            {/* <Text style={{ color: '#35559c', fontSize: 24, fontWeight: 'bold' }}>Chartr</Text> */}
            <Image
              source={{ uri: 'https://framerusercontent.com/images/yEa4ce8bqOfVAhNkZNCbXV3cgd4.png' }}
              style={{ width: 100, height: 20, }}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
              <MaterialCommunityIcons name="account-circle" size={32} color="black" />
            </TouchableOpacity>
          </View>


          {/* location */}
          <View style={{
            backgroundColor: "#F4F6FF", elevation: 5,
            shadowColor: 'black', margin: 13, borderRadius: 10, padding: 5
          }}>
            {/* ======================= search bar ===================================  */}
            <View style={{ backgroundColor: '#E6E6E6', borderRadius: 25, flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginTop: 5, paddingHorizontal: 20, marginBottom: 10 }}>
              <FontAwesome name="search" size={16} color="black" style={{ marginRight: 10 }} />
              <TextInput
                style={{ fontSize: 16, color: "#000", outline: "none", }}
                placeholder="Where do you want to go?"
                placeholderTextColor="#000"
                className='text-red-300'
              />
              {/* <Text style={{ color: 'white', fontSize: 16 }}>Where do you want to go?</Text> */}
            </View>

            {/*==========================================  Recent Locations==========================================*/}
          </View>

          <View style={{ backgroundColor: "#F4F6FF", margin: 13, borderRadius: 10, padding: 5, paddingTop: 10, elevation: 2, shadowColor: "black" }}>
            {/*========================================== Options ========================================== */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, padding: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate("buyTicket")} style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialCommunityIcons name="ticket" size={45} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 8 }}>Bus {"\n"} Ticket</Text>
              </TouchableOpacity>
            
              <TouchableOpacity  style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialIcons name="directions-train" size={45} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 8 }}>Metro {"\n"} Ticket</Text>
                <View style={{ backgroundColor: "red", paddingHorizontal: "4px", position: "absolute", top: -10, borderRadius : 6}}>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center',  paddingVertical: 3}}>New</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("dailyPass")} style={{ alignItems: 'center', position: "relative" }}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialCommunityIcons name="card-account-details" size={45} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 8 }}>Daily {"\n"} Pass</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' ,position : "relative"}}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialIcons name="layers" size={45} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 8,textAlign : "center" }}>Monthly {"\n"} Pass</Text>

                <View style={{ backgroundColor: "red", paddingHorizontal: "4px", position: "absolute", top: -10, borderRadius : 6}}>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center',  paddingVertical: 3}}>New</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{  marginHorizontal: 13,  }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
             
              <TouchableOpacity  style={{ alignItems: 'center', position: "relative",width : "50%", }}>
                <View style={{ backgroundColor: "#3564AC",width : "100%",display : "flex",flexDirection : "row",alignItems: "center", justifyContent : "center", padding: 15, borderRadius: 6, columnGap: 10 }}>
                  <MaterialCommunityIcons name="card-account-details" size={35} color="white" />
                  <Text style={{color : "#FFB22C",fontSize : 17}}>Activate</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 8 }}>Chartr Wallet</Text>
            
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialIcons name="route" size={35} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 8 }}>Route {"\n"} info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: "#E0F4FF", padding: 15, borderRadius: 6 }}>
                  <MaterialIcons name="layers" size={35} color="black" />
                </View>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 8 }}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <Tickets />
          <Pass />


            {/* ========================================== Near Me Section ========================================== */}
            <View style={{ marginVertical: 10, marginHorizontal: 13, }}>
            <View>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, paddingVertical: 10 }}>Nearest Stop</Text>
                <Text style={{ color: 'black', fontSize: 15, textDecorationLine: "underline", paddingVertical: 10 }}>Show all</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'gray', borderRadius: 10, padding: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="bus-alert" size={24} color="black" style={{ marginRight: 10 }} />
              <Text style={{ color: 'black', fontSize: 16 }}>Fetching...</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  mainContainer: {
    paddingHorizontal: 10
  }
});
