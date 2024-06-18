import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react' 
import Data from './data'
import Card from './Components/Card' 
import './App.css'
import './index.css'

function App() {
  const [Id,setId]=useState(0);
  const [Val,setVal]=useState(Data[0]);
  useEffect(()=>{
  setVal(Data[Id]);
},[Id]);
const Len=Data.length;
  return (
    <>
      <Card Id={Id} Val={Val} setId={setId} Len={Len}></Card>
    </>
  )
}

export default App
