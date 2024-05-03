import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import Ionicons from Expo icons


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
       <View style={styles.containerColumn}>
         {/* First container */}
         <View style={[styles.itemContainer, styles.firstContainer]}>
           <Text style={styles.deliveryText}>DoorDash will deliver</Text>
           <Text style={styles.nameText}>John Doe</Text>
           <Text style={styles.dasherText}>Dasher arriving</Text>
           <View style={styles.infoContainer}>
             <Text style={styles.idText}>#12344556677</Text>
             <View style={styles.seperateDot}></View>
             <View style={styles.itemsContainer}>
               <Text style={styles.itemText}>2 Items </Text>
             </View>
             <Text style={styles.etaText}>eta 5min</Text>
           </View>
         </View>


         {/* Second container */}
         <View style={[styles.itemContainer, styles.inactiveContainer]}>
         <Text style={styles.deliveryText}>DoorDash will deliver</Text>
           <Text style={styles.nameText}>John Doe</Text>
           <Text style={styles.dasherText}>Dasher arriving</Text>
           <View style={styles.infoContainer}>
             <Text style={styles.idText}>#12344556677</Text>
             <View style={styles.seperateDot}></View>
             <View style={styles.itemsContainer}>
               <Text style={styles.itemText}>2 Items </Text>
             </View>
             <Text style={styles.etaText}>eta 5min</Text>
           </View>
         </View>


         {/* Third container */}
         <View style={[styles.itemContainer, styles.inactiveContainer]}>
         <Text style={styles.deliveryText}>DoorDash will deliver</Text>
           <Text style={styles.nameText}>John Doe</Text>
           <Text style={styles.dasherText}>Dasher arriving</Text>
           <View style={styles.infoContainer}>
             <Text style={styles.idText}>#12344556677</Text>
             <View style={styles.seperateDot}></View>
             <View style={styles.itemsContainer}>
               <Text style={styles.itemText}>2 Items </Text>
             </View>
             <Text style={styles.etaText}>eta 5min</Text>
           </View>
         </View>
         </View>
     </View>
      <View style={styles.rightContainer}>
        {/* Right container content */}
        <View style={styles.specialInstructionsBar}>
          <Text style={{ color: '#333' }}>2 items </Text> 
          <View style={styles.seperateDot}></View>
          <View style={styles.specialInstructionsTextContainer}>
            <Text style={styles.specialInstructionsText}>Special Instructions</Text>
          </View>
          <View style={styles.printerIconWrapper}>
            <MaterialIcons name="print" size={24} color="black" />
          </View>        
        </View>
        <View style={styles.issueButtonWrapper}>
          <TouchableOpacity style={styles.issueButton}>
            <Text style={styles.issueButtonText}>Issue with Order</Text>
          </TouchableOpacity>
        </View>
        {/* Call Merchant Bar */}
        <View style={styles.callMerchantBar}>
  <View style={styles.column}>
    <Text style={styles.callMerchantTextLabel}>Sebastian</Text>
    <TouchableOpacity style={styles.callMerchantButton}>
      <MaterialIcons name="phone" size={24} color="black" />
    </TouchableOpacity>
  </View>
  <View style={styles.newDivider}></View> 
  <View style={styles.column}>
    <Text style={styles.callMerchantTextLabel}>Correy M</Text>
    <TouchableOpacity style={styles.callMerchantButton}>
      <MaterialIcons name="phone" size={24} color="black" />
    </TouchableOpacity>
  </View>
</View>


        {/* Super Burrito */}
        <View style={styles.ingredients}>
          <Text style={styles.superBurritoText}>2   Super Burrito</Text>
          <Text style={styles.superBurritoPrice}>$23.80</Text>
        </View>
        {/* flour torilla */}
        <View style={styles.ingredients}>
          <Text style={styles.superBurritoText}>      Flour tortilla</Text>
          <Text style={styles.superBurritoPrice}>$1.00</Text>
        </View>
        {/* Black Beans */}
        <View style={styles.ingredients}>
          <Text style={styles.superBurritoText}>      Black Beans</Text>
        </View>
        {/* No sour cream */}
        <View style={styles.ingredients}>
          <Text style={styles.superBurritoText}>      No sour cream</Text>
        </View>
        {/* Carnitas */}
        <View style={styles.ingredients}>
          <Text style={styles.superBurritoText}>      Carnitas</Text>
        </View>
        {/* Pickup Bar */}
        <View style={styles.pickupBar}>
         <View style={styles.pickupButtons}>
          <Text style={styles.pickupInText}>Pickup in</Text>
          <Text style={styles.boldAndLarge}>12 min</Text>
            <TouchableOpacity style={styles.pickupButton}>
            <Text style={styles.pickupButtonText}>-5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pickupButton}>
        <   Text style={styles.pickupButtonText}>+5</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.readyForPickup}>
            <Text style={styles.readyForPickupText}>Ready for Pickup</Text>
          </TouchableOpacity>        
          </View>
       </View>
       {/* Other content in the right container */}
     </View>
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
    backgroundColor:  '#F0F3F6',
  },
  rightContainer: {
    flex: 3,
    backgroundColor: 'white',
    paddingHorizontal: 20, // Add horizontal padding to the right container
    paddingTop: 20, // Add top padding to the right container
    position: 'relative', // Position the container relatively to allow absolute positioning of children
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
  specialInstructionsBar: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2, // Add elevation for a subtle shadow effect
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
    position: 'relative', // Position the container relatively to allow absolute positioning of children
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray', // Add light gray border color
  },
  specialInstructionsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00666D',
  },
  printerIconWrapper: {
    position: 'absolute',
    right: 200, // Adjust as needed to move the icon to the right
    top: '185%', // Position the icon vertically in the middle of its parent
    transform: [{ translateY: -20 }], // Adjust to vertically center the icon
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  issueButtonWrapper: {
    position: 'absolute',
    right: 10, // Adjust as needed to position it to the right of the printer icon
    top: '7.75%', // Position the wrapper vertically in the middle of its parent
    transform: [{ translateY: -20 }], // Adjust to vertically center the wrapper
  },
  issueButton: {
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  issueButtonText: {
    color: 'black',
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
    paddingVertical: 25,
    marginBottom: 10, // Increase vertical padding
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
    paddingBottom: 10,
  },
  containerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: '#DFE6EB',
    flex: 1, // Take up remaining space in left container
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    paddingVertical: 25,
    marginBottom: 10,
  },
  firstContainer: {
    borderLeftColor: 'blue',
    borderLeftWidth: 6,
  },
  inactiveContainer: {
    backgroundColor: '#E7E7E7',
  },
  deliveryText: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 18,
    color: '#191919',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  idText: {
    fontSize: 16,
    color: 'grey',
    marginRight: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperateDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  itemsContainer: {
    flexDirection: 'row',
    marginRight: 'auto',
  },
  itemText: {
    fontSize: 16,
    color: '#191919',
    marginRight: 10,
  },
  dasherText: {
    fontSize: 16,
    color: '#A16C00',
    marginLeft: 'auto',
  },
 etaText: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 'auto',
 },
  callMerchantBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop: 20,
  },
  callMerchantTextLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 70,
  },
  superBurritoSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  superBurritoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  superBurritoPrice: {
    fontSize: 16,
    color: 'black',
  },
  ingredients: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  pickupBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  pickupButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickupInText: {
   fontSize: 14,
   color: 'black',
   marginBottom: 27,
   marginLeft: 20,
   marginRight: 25,
   paddingHorizontal: 30,
 },
 
 
  boldAndLarge: {
   fontWeight: 'bold',
   fontSize: 18,
   marginLeft: -142,
   paddingHorizontal: 30,
   marginTop: 20,
  
 },
 
 
  pickupButton: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 20, // Increase horizontal padding
    paddingVertical: 20, // Increase vertical padding
    marginRight: 30,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
 
 
 
 
  pickupButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  readyForPickup: {
    backgroundColor: '#4969F5',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 5,
    marginLeft: 40,
  },
  readyForPickupText: {
   fontSize: 16,
   color: 'white',
 },
  time: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    marginLeft: 50,
    marginRight: 25,
  },
  specialInstructionsBar: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2, // Add elevation for a subtle shadow effect
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
    position: 'relative', // Position the container relatively to allow absolute positioning of children
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray', // Add light gray border color
  },
  specialInstructionsTextContainer: {
    backgroundColor: '#ECFCFC', // Add light blue background color
    borderRadius: 5, // Add border radius for rounded corners
    paddingHorizontal: 0,
    paddingVertical: 5, // Adjust padding as needed
    elevation: 2, // Add elevation for a subtle shadow effect
    marginRight: 10, // Add right margin to create space between the dot and the text container
  },
   specialInstructionsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00666D',
  },
  printerIconWrapper: {
    position: 'absolute',
    top: 20, // Adjust as needed to position it from the top
    right: 165, // Adjust as needed to position it from the left
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
   issueButtonWrapper: {
    position: 'absolute',
    top: 60, // Adjust as needed to position it from the top
    right: 20, // Adjust as needed to position it from the right
    // Adjust to vertically center the wrapper
    transform: [{ translateY: -20 }], // Adjust to vertically center the wrapper
  },
   issueButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
   issueButtonText: {
    color: 'black',
  },
  callMerchantBar: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add space between the columns
    marginTop: 20,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop: 20,
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60, // Set the height of the container
    paddingHorizontal: 10, // Add padding for spacing
    width: '50%', // Each column takes half of the width
  },
  callMerchantTextLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginRight: 'auto', // Push the name
    //flex: 1, // Allow the name to occupy remaining space
  },
   callMerchantButton: {
    padding: 5,
    marginRight: 10, // Align the phone icon to the right
  },
  newDivider: {
    width: 1, // Width of the divider
    height: '100%', // Height of the divider, same as the column height
    backgroundColor: 'lightgray', // Color of the divider
  },
 
 
 
 
 });
 