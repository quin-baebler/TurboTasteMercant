import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Task Bar */}
        <View style={styles.taskBar}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Orders</Text>
          <View style={styles.acceptingButton}>
            <View style={styles.dot} />
            <Text style={styles.acceptingText}>Accepting</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

  {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabText}>Active</Text>
            <View style={styles.activeIndicator}></View>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.tab, styles.inactiveTab]}>
            <Text style={styles.tabText}>Upcoming</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inTheKitchenText}>In the kitchen</Text>
        <View style={styles.containerRow}>
    {/* First container */}
          <View style={styles.itemContainer}>
            {/* Content of the first container */}
          </View>

          {/* Second container */}
          <View style={styles.itemContainer}>
            {/* Content of the second container */}
          </View>

          {/* Third container */}
          <View style={styles.itemContainer}>
            {/* Content of the third container */}
          </View>
        </View>

      </View>
      <View style={styles.rightContainer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 2,
    backgroundColor: 'lightgrey',
  },
  rightContainer: {
    flex: 3,
    backgroundColor: 'white',
  },
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25, // Increased height of task bar
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  menuButton: {
    padding: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: -230,
    marginTop: 10, // Move the title closer to the menu button
  },
  acceptingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Move the button down a little
    backgroundColor: 'white', // Set background color to white
    paddingVertical: 5, // Add vertical padding
    paddingHorizontal: 10, // Add horizontal padding
    borderRadius: 20, // Round the corners
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
  acceptingText: {
    fontSize: 16,
    color: 'green',
  },
  divider: {
    height: 1,
    backgroundColor: 'darkgrey',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center the tabs vertically
    paddingHorizontal: 10,
    paddingVertical: 25, // Increase vertical padding
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    paddingBottom: 10, // Add more space between active tab and bottom underline
  },
  inactiveTab: {
    paddingBottom: 10, // Add more space between active tab and bottom underline
  },
  activeIndicator: {
    height: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: -5, // Move the underline slightly below the tabs
    left: 0,
    right: 0,
  },
  inTheKitchenText: {
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 15,
    fontSize: 16,
    color: '#191919',
  },
  containerRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  itemContainer: {
  width: '60%', // Adjust as needed
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  marginBottom: 10,
  }
  
  
  
});
