import React from 'react'
import { useState } from 'react'
import Sidebar from './components/Chat/Sidebar'
import ChatWindow from './components/Chat/ChatWindow'
import ProductDetails from './components/Chat/ProductDetails'
import Header from './components/Chat/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col">
      <div className="">
        <Header />
      </div>
    <div className="flex h-screen">
    <Sidebar />
    <ChatWindow />
    <ProductDetails />
  </div>
  </div>
  )
}

export default App
