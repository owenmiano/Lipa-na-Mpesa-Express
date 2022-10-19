import React,{createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../components/Config'
import axios from 'axios'

export const PaymentContext=createContext()

export const PaymentProvider=({children})=>{
    const[payments,setPayments]=useState({})
    const [isLoading,setIsLoading]=useState(false)
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
   
    return(
    <PaymentContext.Provider 
        value={{
          addTransaction,
          isLoading,
          errors
          }}>
         {children}
      </PaymentContext.Provider>
    )
}