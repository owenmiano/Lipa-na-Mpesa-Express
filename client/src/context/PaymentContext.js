import React,{createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../components/Config'
import axios from 'axios'

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
        ).then(res=>{
          let paymentInfo=res.data
          console.log(paymentInfo)
          setPayments(paymentInfo)
          setIsLoading(false)
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
          transactions
          }}>
         {children}
      </PaymentContext.Provider>
    )
}