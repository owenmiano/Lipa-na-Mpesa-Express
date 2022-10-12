import React,{createContext, useEffect, useState} from 'react'
export const PaymentContext=createContext()

export const PaymentProvider=({children})=>{
    const[payments,setPayments]=useState({})
}