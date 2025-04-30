import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const TabThreeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.header}>Personal Details</Text>
        
        <TextInput style={styles.input} placeholder="Aditya Rawat" placeholderTextColor="#000"/>
        <TextInput style={styles.input} placeholder="Enter phone number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Enter your e-mail" keyboardType="email-address"/>

        <Text style={styles.header}>Issue Details</Text>
        
        <TextInput 
          style={[styles.input, styles.multiline]} 
          placeholder="Please enter the description details here in 500 characters and attach a file/photo for faster resolution." 
          multiline={true}
          numberOfLines={6}
          maxLength={500}
          textAlignVertical="top"
        />

        <View style={styles.attachContainer}>
          <Text style={styles.attachTitle}>Attach File (optional)</Text>
          <Text style={styles.attachSubtitle}>(image/pdf/doc file allowed) max 5 MB</Text>

          <TouchableOpacity style={styles.attachBox}>
            <Text style={styles.plus}>＋</Text>
            <Text style={styles.attachText}>Add a file</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default TabThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  card: {
    width :" 100%",
    height : "100%",
    backgroundColor: '#fff',
    // padding: 15,
    position : "relative"
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    color: '#000',
  },
  multiline: {
    height: 120,
    textAlignVertical: 'top',
  },
  attachContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  attachTitle: {
    // fontWeight: '',
    color: '#000',
  },
  attachSubtitle: {
    color: '#777',
    fontSize: 12,
    marginBottom: 10,
  },
  attachBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#bbb',
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  attachText: {
    color: '#000',
  },
  plus: {
    fontSize: 24,
    color: '#008080',
    marginRight: 10,
  },
  button: {
    position : 'absolute',
    bottom: -50, 
    left : 0,
    width : "100%",
    backgroundColor: '#25b7b7',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
