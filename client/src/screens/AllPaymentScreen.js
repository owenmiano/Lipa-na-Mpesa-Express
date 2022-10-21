import React, { useContext } from 'react'
import { FlatList, Text, View ,TouchableWithoutFeedback,Alert,StyleSheet} from 'react-native'
import { PaymentContext } from '../context/PaymentContext'
import { numberWithCommas } from "../components/format";
import Spinner from 'react-native-loading-spinner-overlay'


function AllPaymentScreen() {
  const {refreshing,transactions}=useContext(PaymentContext)

   const showTransaction = (transaction) => {
    
   Alert.alert("Transaction Details",
`Receipt:${transaction.receipt}
 Phone:${transaction.phone}
 Amount:${numberWithCommas(transaction.amount)}
 Date:${transaction.date}`);
};

 const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}
  return (
    <View style={styles.container}>
      <Spinner visible={refreshing}/>
      {Object.keys(transactions).length == 0 && (
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          You have no transactions
        </Text>
      )}
      <FlatList
        data={transactions}
        keyExtractor={transaction => transaction._id}
        ItemSeparatorComponent = { FlatListItemSeparator }
        renderItem={({item: transaction}) => (
          <TouchableWithoutFeedback
            onPress={() => showTransaction(transaction)}>
            <View
              style={styles.item}>
              <Text style={{fontSize:18}}>Receipt: {transaction.receipt}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    
   },
  item: {
    marginTop:5,
    padding:10
  },

})
export default AllPaymentScreen