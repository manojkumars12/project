import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePicker from 'react-datepicker'
import { personalInfoAtom, professionalAtom } from './store/formsAtom'     
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import AppBar from './components/AppBar'
import Grid1 from './components/Grid1'
import Grid2 from './components/Grid2'

function App() {
  
  return (
    <RecoilRoot>
    <div>
      <AppBar />
      <div className='grid grid-cols-2 gap-2'>
        <Grid1 />
        <Grid2 />
      </div>
    </div>
    <Submit />
    </RecoilRoot>
  )
}
function Submit(){
  const personalInfo = useRecoilValue(personalInfoAtom);
  const professionalInfo = useRecoilValue(professionalAtom);
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/addData', {
      method: "POST", 
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(personalInfo)
    })
    const result = await response.json();
    console.log(result);
  }
  return (
    <div className='flex justify-center'>
      <button className='border-2 border-black rounded-lg p-1 w-20 font-sans bg-gray-100 hover:bg-gray-300' onClick={handleSubmit}>Submit</button>
    </div>
  )
}




export default App
