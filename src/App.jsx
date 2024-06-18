import { useEffect, useState } from 'react'
import './App.css'
import Hook from './Hook'
import { prototype } from 'postcss/lib/previous-map'

export default function App() {
    let [currency,setCurrency]= useState('usd')
    
    let [amountfrom,setamountfrom]= useState(0)
    let [amountto,setAmountto]= useState('0')
    let [currencyTo,setCurrencyTo]= useState('inr')
    let [data,setData]=useState({})
  
 let API=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

 let [currenciesoption,setcurrenciesoption]=useState(['usd'])
 console.log(currenciesoption)
 useEffect(()=>{

    
    fetch(API).then((e)=>(e.json())).then((res)=>{return(setData(res[currency]))}).catch((err)=>{console.log(err)})
   //  console.log(data)
    currenciesoption=Object.keys(data)
    // console.log(currenciesoption)
    setcurrenciesoption(Object.keys(data))
 },[currency,amountfrom])


useEffect(()=>{

   
   let v=amountfrom*data[currencyTo]
   setAmountto(v)
//    console.log(v)
   // console.log(data[currencyTo])

},[amountfrom,currencyTo])
  

  
   

  return (
  <div className='main'>
    
        <div className='outer'>
            
            <div className='input1'>
               <input className='inputbox' type='number' value={(amountfrom)}
               onChange={(e)=>setamountfrom(e.target.value)}
               min={1} max={100}>
               </input>

            </div>
            <div className='input2'>
            <input className='inputbox' type='number' value={amountto}
            onChange={(e)=>setAmountto(e.target.value)} min={1} max={100} disabled="true">
            </input>
            
            </div>
        </div>
      
      <div className='loop'>
<select style={{color:"blue"}} onChange={(e)=>setCurrency(e.target.value)}>

{currenciesoption.map((option, index) => {
                    return (
                        <option value={option} >
                            {option}
                        </option>
                    );
                })}
</select>
</div>
      <div className='loop2'>
<select style={{color:"blue"}} onChange={(e)=>setCurrencyTo(e.target.value)}>

{currenciesoption.map((option, index) => {
                    return (
                        <option value={option} >
                            {option}
                        </option>
                    );
                })}
</select>
</div>



  </div>
  )
}