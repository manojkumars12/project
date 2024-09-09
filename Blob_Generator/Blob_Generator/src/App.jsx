import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  const [value, setValue] = useState({
    radiusOne: 30,
    radiusTwo: 80,
    radiusThree: 60,
    radiusFour: 40,
    blobHeight: 200,
    blobWidth: 200,
  })
  const [valueColor, setValueColor] = useState({
    colorOne: "#B6FFFA",
    colorTwo: "#80B3FF",
  })
  const [borderRadius, setBorderRadius] = useState(0);
  const [outputCode, setOutputCode] = useState("");
  const handleChange = (e) => {
    setValue({...value, [e.target.name]: parseInt(e.target.value)});
    setValueColor({...valueColor, [e.target.name]: e.target.value});
    console.log(e.target.value);

    let updatedBorderRadius = `${value.radiusOne}% ${100 - value.radiusOne}% ${100 - value.radiusThree}%
    ${value.radiusThree}% / ${value.radiusFour}% ${value.radiusTwo}% ${100 - value.radiusTwo}% ${100 - value.radiusFour}%
    `;
    console.log(updatedBorderRadius)

    setBorderRadius(updatedBorderRadius);
    setOutputCode(`border-radius: ${updatedBorderRadius}, background: ${`linear-gradient(to bottom, ${valueColor.colorOne} 0%, ${valueColor.colorTwo} 100%)`}`)
  }

  return (   
      <div className='flex flex-col justify-center items-center gap-6'>
        <div>
          <div id='blob' style={{
            borderRadius: `${borderRadius}`,
            height: `${value.blobHeight}px`,
            width: `${value.blobWidth}px`,
            background: `linear-gradient(to bottom, ${valueColor.colorOne} 0%, ${valueColor.colorTwo} 100%)`
          }}>
          </div>
        </div>

        <div className='flex gap-4'>
            <div>
              <p>Height</p>
              <input type='text' id='blob-height' name='blobHeight' value={value.blobHeight} onChange={handleChange} className='border-2 border-black rounded-lg'/>
            </div>
            <div>
              <p>Width</p>
              <input type='text' id='blob-width' name='bobWidth' value={value.blobWidth} onChange={handleChange} className='border-2 border-black rounded-lg'/>
            </div>
            <div>
              <p>Select Colors</p>
              <input type='color' name='colorOne' value={valueColor.colorOne} onChange={handleChange} className='border-2 border-black rounded-lg'/>
              <span>/</span>
              <input type='color' name='colorTwo' value={valueColor.colorTwo} onChange={handleChange} className='border-2 border-black rounded-lg'/>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <input type='range' name='radiusOne' value={value.radiusOne} onChange={handleChange}/>
          <input type='range' name='radiusTwo' value={value.radiusTwo} onChange={handleChange}/>
          <input type='range' name='radiusThree' value={value.radiusThree} onChange={handleChange}/>
          <input type='range' name='radiusFour' value={value.radiusFour} onChange={handleChange}/>
        </div>

        <div className='h-25 w-60 border-2 flex justify-center items-center'>${outputCode}</div>

        <div>
          <Button outputCode={outputCode}/>
        </div>
      </div>
  )
}
function Button({outputCode}){
  return <div>
    <button className='border border-pink-400 hover:border-pink-700 border-4' onClick={() => navigator.clipboard.writeText(outputCode)}>Copy</button>
  </div>
}

export default App
