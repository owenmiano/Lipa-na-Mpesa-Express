import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import NewPaymentScreen from './NewPaymentScreen'
import AllPaymentScreen from './AllPaymentScreen'

//Screen names
const newPayment = "NewPayment";
const allPayment = "AllPayments";

const Tab = createBottomTabNavigator();

function Temporary() {
    // const {forecast,refreshing}=useContext(ApiContext)
   
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
      <Tab.Screen name={allPayment} component={AllPaymentScreen} />
    </Tab.Navigator>

    </NavigationContainer>
    
  )
}

export default Temporary