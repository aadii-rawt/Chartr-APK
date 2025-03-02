import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
      <View >
        {/* <Text style={{ color: "white" }}>Chartr</Text> */}
        {/* <Image source={{ uri: "https://framerusercontent.com/images/yEa4ce8bqOfVAhNkZNCbXV3cgd4.png?scale-down-to=512"}} style={styles.img} /> */}
      </View>
      <View>
        <Text style={{ color: "white" }}>user</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "gray"
  },
  icon : {
    width : "100px",
    height : "100px",
    backgroundColor : "white"
  },
  img : {
    width : "60%",
    height :"100%"
  }
})