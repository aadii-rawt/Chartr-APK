import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Tickets = () => {
    return (
        <View style={{ margin: 13, borderRadius: 10, padding: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, paddingVertical: 10 }}>Tickets</Text>
                <Text style={{ color: 'white', fontSize: 15, paddingVertical: 10, color: "gray" }}>View all tickets</Text>
            </View>

            {/* bus ticket */}
            <View style={{backgroundColor : "#C2FFC7",borderRadius: 10,  overflow: "hidden", position: "relative", width: "100%", elevation: 2, shadowColor: "#000" }}>

                <View style={{backgroundColor : "white",padding : 10,borderWidth: 0.2,borderRadius: 10,borderColor : "#242424d9"  }}>
                    <View style={styles.ticketHeader}>
                        <View style={{ display: "flex", flexDirection: "row", columnGap: 10, }}>
                            <View style={{borderWidth: 0.1, padding: 3, borderRadius:5}}>
                                <Text>DL51EV9602</Text>
                            </View>
                            <View style={{borderWidth: 0.1, padding: 3, borderRadius:5,backgroundColor:"#C2FFC7"}}>
                                <Text>Success</Text>
                            </View>
                        </View>
                        <View ><Text style={{fontSize : 16,fontWeight : 500}}>22.75</Text></View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", columnGap: 5, paddingVertical : 10}}>
                        <View>
                            <Text style={{fontSize: 15}}>Pushpa Bhawan - Nehru Place Terminal</Text>
                        </View>
                    </View>
                    <View style={{display : "flex", flexDirection : "row", columnGap: 5,}}>
                            <View style={{borderWidth: 0.1, padding: 3, borderRadius:5}}>
                                <Text>DTC</Text>
                            </View>
                            <View style={{ padding: 3, borderRadius:5,backgroundColor : "orange",}}>
                                <Text style={{color : "white"}}>General</Text>
                            </View>
                            <View style={{ padding: 3, borderRadius:5,backgroundColor : "green",}}>
                                <Text style={{color : "white"}}>Expired</Text>
                            </View>
                            <View style={{borderWidth: 0.1, padding: 3, borderRadius:5,}}>
                                <Text>1</Text>
                            </View>
                        </View>
                </View>


                <View style={{backgroundColor : "#C2FFC7" ,padding : 5}}>
                   <Text style={{textAlign : "center"}}>Click on this ticket to view.</Text> 
                </View>


                {/* Centered "INVALID" Text */}
                {/* <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -70 }, { translateY: -30 }, { rotate: "-10deg" }],
                        color: "#FE4040",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderWidth: 3,
                        // transform : "rotate(20px)",
                        borderColor: "#FE4040",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        opacity: 0.9,
                    }}
                >
                    INVALID
                </Text> */}
            </View>

        </View>
    )
}

export default Tickets

const styles = StyleSheet.create({
    ticketHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})