import { useRecoilState } from "recoil";
import { personalInfoAtom } from "../store/formsAtom";  
export default function Grid1(){
    const [data, setData] = useRecoilState(personalInfoAtom);
    function handleChange(event){
       const {name, value} = event.target;
       setData((prev) => ({
        ...prev,
        [name]:value
       }));
    }
    const handleToggle = (event) => {
      const {name, value} = event.target;
      setData((prev) => ({
        ...prev,
        [name]: value === 'false' ? true:false
      })) 
    }
    
    return (
      <div className='border-2 rounded-lg p-2'>
          <div className='flex justify-between'>
            Personal Information
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className='flex flex-col justify-around'>
            <p>Start Date</p>
            <input type='date' className='border-2' name='startDate' onChange={handleChange} value={data.startDate}required/>
            <br></br>
            <p>End Date</p>
            <input type='date' className='border-2' name='endDate' onChange={handleChange} value={data.endDate}/>
            <br></br>
            
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" name='currentlyWork' value={data.currentlyWork} onChange={handleToggle}/>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Currently Works</span>
            </label>
            <br></br>
            <h5>Name</h5>
            <input type='text' className='border-2 h-7 w-15' name='name' value={data.name} onChange={handleChange}required/>
            <br></br>
            <h5>Phone Number</h5>
            <input type='text' className='border-2 h-7 w-15' name='number' value={data.number} onChange={handleChange} required/>
            <br></br>
          </div>
      </div>
    )
  }