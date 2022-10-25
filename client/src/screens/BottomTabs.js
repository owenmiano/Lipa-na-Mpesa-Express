import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';



// Screens
import NewPaymentScreen from './NewPaymentScreen'
import AllPaymentScreen from './AllPaymentScreen'
import { PaymentContext } from '../context/PaymentContext';
import { TouchableOpacity } from 'react-native';

//Screen names
const newPayment = "New Payment";
const allPayment = "All Payments";

const Tab = createBottomTabNavigator();

function BottomTabs () {
    const {fetchAllTransactions}=useContext(PaymentContext)
   
  return (
  
    <NavigationContainer>
      <Tab.Navigator  
      initialRouteName={newPayment}
      screenOptions={({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if(rn === newPayment){
            iconName=focused ? 'ios-add-circle' : 'ios-add-circle-outline'
          }else if(rn === allPayment){
            iconName=focused ? 'ios-list-circle' : 'ios-list-circle-outline'
            
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'blue',
        // headerShown:false,
        postion:'absolute',

        
    })
    }
   
       
   
    >
      <Tab.Screen name={newPayment} component={NewPaymentScreen} />
      <Tab.Screen name={allPayment}
       component={AllPaymentScreen}
       options={{
        headerRight: () => (
          <TouchableOpacity
           onPress={()=> fetchAllTransactions()}
           style={{paddingRight: 20}}>
                      <Foundation
                        name="refresh"
                        size={35}
                        
                        color="black"
                        />
            </TouchableOpacity>
        ),
       }}
       />
    </Tab.Navigator>

    </NavigationContainer>
    
  )
}

export default BottomTabs 