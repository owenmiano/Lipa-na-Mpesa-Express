import React, { useContext } from 'react'
import { FlatList, Text, View ,TouchableWithoutFeedback} from 'react-native'
import { PaymentContext } from '../context/PaymentContext'
import { numberWithCommas } from "../components/format";

function AllPaymentScreen() {
  const {refreshing,transactions}=useContext(PaymentContext)
  const {amount,receipt,phone,date}=transactions
   console.log(transactions)

//    const showTransaction = (transaction) => {
    
//    alert("Transaction Details",`${transaction.receipt}`);
//  };
  return (
    
    <View>
        {Object.keys(transactions).length == 0 && <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16,alignContent:'center',justifyContent:'center'}}>You have no transactions</Text> }
        {/* <FlatList
       data={transactions}
       keyExtractor={(transaction)=>transaction._id}
        renderItem={({ transaction }) => (
        <TouchableWithoutFeedback onPress={() => showTransaction(transaction)}>
          <View>
            <Text>Receipt: {transaction.receipt}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    /> */}
        
        
    </View>
  )
}

export default AllPaymentScreen