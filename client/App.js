import React from 'react'
import BottomTabs from './src/screens/BottomTabs'
import { PaymentProvider } from './src/context/PaymentContext'


function App() {
  return (
    <PaymentProvider>
       <BottomTabs/>
    </PaymentProvider>
    
  )
}

export default App