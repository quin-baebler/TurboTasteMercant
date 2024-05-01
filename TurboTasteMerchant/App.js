import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
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
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabText}>Active</Text>
            <View style={styles.activeIndicator}></View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
            <Text style={styles.tabText}>Upcoming</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inTheKitchenText}>In the kitchen</Text>

      </View>
      <View style={styles.rightContainer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange containers horizontally
  },
  leftContainer: {
    flex: 2, // Cover 2/5 of the screen
    backgroundColor: 'lightgrey',
  },
  rightContainer: {
    flex: 3, // Cover the rest of the screen
    backgroundColor: 'white',
  },
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25, // Increased height of task bar
    paddingHorizontal: 10,
    backgroundColor: '#f0efed',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  menuButton: {
    padding: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -210,
    marginTop: 10,
  },
  acceptingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, // Move the button down a little
    backgroundColor: 'white', // Set background color to white
    paddingVertical: 10, // Add vertical padding
    paddingHorizontal: 10, // Add horizontal padding
    borderRadius: 20, 
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
  activeIndicator: {
    height: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: -5, // Move the underline slightly below the tabs
    left: 0,
    right: 0,
  },
  inactiveTab: {
    paddingBottom: 10, // Add more space between inactive tab and bottom underline
  },
  inTheKitchenText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    color: 'grey',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  container: {
    width: '30%', // Adjust as needed
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
  
});
