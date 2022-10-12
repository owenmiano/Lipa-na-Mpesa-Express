import React,{createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../../components/Config'
export const PaymentContext=createContext()

export const PaymentProvider=({children})=>{
    const[payments,setPayments]=useState({})
    const [isLoading,setIsLoading]=useState(false)

    // add new Transaction
    const addTransaction=async(amount,phone)=>{
        try {
           setIsLoading(true) 
          await axios.post(`${BASE_URL}/api`,{
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
          
            console.log(error.message)
          if(error.message === 'Network Error'){
            Alert.alert("You are Offline!","Please Connect To the Internet",
            [
              {
                  text:"Try Again",
              }
          ]
            )
          }
            Alert.alert("Something went wrong",`${error.message}`,
            [
              {
                  text:"Try Again",
              }
          ]
            )
          
        
        }
      }


 return(
    <PaymentContext.Provider 
      value={{
         payments,
         addTransaction
        }}>
       {children}
    </PaymentContext.Provider>
 )
}