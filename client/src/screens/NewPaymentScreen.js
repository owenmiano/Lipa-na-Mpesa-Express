import React,{useContext, useState} from 'react'
import { KeyboardAvoidingView, SafeAreaView,View ,TextInput,TouchableOpacity,Text, StyleSheet,Alert,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { PaymentContext } from '../context/PaymentContext'
import Spinner from 'react-native-loading-spinner-overlay'
import { numberWithCommas } from "../components/format";

function NewPaymentScreen() {
  const [amount,setAmount]=useState(null)
  const [phone,setPhone]=useState(null)
  const {isLoading,addTransaction,errors,payments}=useContext(PaymentContext)

  return (
    
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
      <Spinner visible={isLoading}/>
      <KeyboardAvoidingView>
      {errors ? 
           
           (<Text style={styles.error}>{errors}</Text>)
           :
           null
           }
         <View style={{paddingHorizontal:25}}>
          <View style={{flexDirection:'row',borderWidth:0.5,paddingBottom:8,marginBottom:25,alignItems:'center',backgroundColor:'#F3F4FB',borderColor:'#7978B5'}}>
          <Icon name='money-bill-alt' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput 
          placeholder='Enter amount (Kes)' 
          keyboardType='numeric'
          onChangeText={text=>setAmount(text)}
          placeholderTextColor='#000'
          autoCapitalize = 'none'
         
          />
        </View>
        <View style={{flexDirection:'row',borderWidth:0.5,backgroundColor:'#F3F4FB',paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='phone-alt'
           style={{fontSize:24,color:"black",marginRight:5}}
           />
          <TextInput 
          placeholder='Enter your phone Number'
          keyboardType='numeric'
          onChangeText={text=>setPhone(text)}
          placeholderTextColor='#000'
          autoCapitalize = 'none'
           />
           
          </View>
          <TouchableOpacity 
         style={{
           backgroundColor:'blue',
           padding:10,
           borderRadius:10,
           marginBottom:30
         }}
         onPress={()=>{
          addTransaction(amount,phone)
         }}>
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'white'}}>Pay {amount && numberWithCommas(amount)}</Text>
            
         </TouchableOpacity>
         </View>
         
      </KeyboardAvoidingView>
     </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    error:{
        textAlign:'center',
        fontSize:15,
        color:'red',
        marginBottom:15

    }
})
export default NewPaymentScreen