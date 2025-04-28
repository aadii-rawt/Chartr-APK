import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic}>
          <Ionicons name="person-circle-outline" size={50} color="#000" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Aditya Rawat</Text>
          <Text style={styles.verification}>Number not verified.</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Feather name={item.icon} size={22} color="#000" />
            <Text style={styles.menuText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.socialContainer}>
        <Text style={styles.follow}>Follow us on :</Text>
        <View style={styles.socialIcons}>
          <Ionicons name="logo-youtube" size={26} color="#000" />
          <Ionicons name="logo-instagram" size={26} color="#000" style={styles.socialIcon} />
          <Ionicons name="send-outline" size={26} color="#000" style={styles.socialIcon} />
        </View>
        <Text style={styles.version}>App version : 1.14.0 (178)</Text>
      </View>
    </ScrollView>
  );
};

const menuItems = [
  { icon: 'book-open', text: 'My Tickets' },
  { icon: 'layers', text: 'My Passes' },
  { icon: 'bar-chart-2', text: 'Leaderboard' },
  { icon: 'share-2', text: 'Share app' },
  { icon: 'star', text: 'Rate Us' },
  { icon: 'mail', text: 'Contact us' },
];

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 20,
    marginBottom: 15,
  },
  profilePic: {
    marginRight: 10,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  verification: {
    color: '#888',
  },
  menu: {
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 15,
    color: '#000',
    marginLeft: 20,
  },
  socialContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  follow: {
    color: '#000',
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    marginLeft: 20,
  },
  version: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 10,
  },
});
