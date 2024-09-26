import React, { Suspense, useState } from 'react'
import './App.css'
import Logo from './assets/flipkartlogo.svg';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { RecoilRoot, useRecoilState } from 'recoil';
import { inputChange } from './store/Store';

const Landing = React.lazy(() => import('./components/Landing'))
const Cart = React.lazy(() => import('./components/Cart'))

function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
    <AppRouter />
      <Routes>
        <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>}/>       
        <Route path='/cart' element={<Suspense fallback={"loading..."}><Cart /></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

function AppRouter() {
  const [input, setInputChange] = useRecoilState(inputChange);
  const navigate = useNavigate();
  function changeHandler(event){
      setInputChange(() => event.target.value)
  }
  return (
      <div className='flex justify-between bg-white items-center rounded-lg'>
      {/* <div className='border-4w p-2 '>E-com website</div> */}
      <img src={Logo}/>
      <div className='flex flex-start w-96 border-white outline-none bg-[#f0f5ff] rounded-md p-1 m-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type='text' onChange={changeHandler} placeholder='Search for products ,Brands and More' className='w-96 border-white outline-none bg-[#f0f5ff] rounded-md ml-3'/>
      </div>
      <div className='flex items-center'>
        <button className='p-2 mr-6' onClick={() => navigate('/')}>Home</button>
        <button className='p-2 mr-6' onClick={() => navigate('/cart')}>Cart</button> 
      </div> 
  </div>
  )
}
export default App
