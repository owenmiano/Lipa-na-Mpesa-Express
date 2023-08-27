import React,{createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../components/Config'
import axios from 'axios'
import { ToastAndroid} from 'react-native'

export const PaymentContext=createContext()

export const PaymentProvider=({children})=>{
    const[payments,setPayments]=useState({})
    const[transactions,setTransactions]=useState({})
    const [isLoading,setIsLoading]=useState(false)
    const [refreshing,setRefreshing]=useState(false)
    const [errors,setErrors]=useState("")
     // Login User
  const addTransaction=async(amount,phone)=>{
    try {
       setIsLoading(true) 
      await axios.post(`${BASE_URL}/api/stk`,{
        amount,phone,
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
        }   
        ).then((res)=>{
          let paymentInfo=res.data.ResponseDescription
          // let callbackResponse=res.data.ResultDesc
          console.log(paymentInfo)
          // console.log(callbackResponse)
          setPayments(paymentInfo)
           setIsLoading(false)
           ToastAndroid.show(`${paymentInfo}`, ToastAndroid.SHORT);
})
    } catch (error) {
        setIsLoading(false)
        setErrors(error.response.data.message)
        console.log(error.response.data.message)
      }
  }

  // fetch all transactions
  const fetchAllTransactions=async()=>{
    try {
       setRefreshing(true) 
      await axios.get(`${BASE_URL}/api/allTransactions`)
      .then(res=>{
          let transactionInfo=res.data
          // console.log(transactionInfo)
          setTransactions(transactionInfo)
          setRefreshing(false)
       })
    } catch (error) {
        setRefreshing(false)
        setErrors(error.response.data.message)
        console.log(error.response.data.message)
      }
  }

  useEffect(()=>{
    fetchAllTransactions()
  },[])
   
    return(
    <PaymentContext.Provider 
        value={{
          addTransaction,
          isLoading,
          refreshing,
          errors,
          payments,
          transactions,
          fetchAllTransactions
          }}>
         {children}
      </PaymentContext.Provider>
    )
}