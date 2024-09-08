import { useRecoilState } from "recoil";
import { professionalAtom } from '../store/formsAtom'  
export default function Grid2(){
    const options = ['IT', 'Engineering','Sales','Marketing','Customer Service'];
    const roles = ['Engineer', 'support','TL','Project Manager', 'senior Engineer'];
    const [data , setData] = useRecoilState(professionalAtom);
    const handleChange = (event) => {
         const {name, value} = event.target;
         setData((prev) => ({
            ...prev,
            [name] :  value
         }))
    }
    const handleFileChange = (event) => {
        const {name} = event.target;
        setData((prev) => ({
          ...prev,
          [name] : event.target.files[0]
        }))
    }
    return (
      <div className='border-2 rounded-lg p-2'>
          <div className='flex justify-between'>
            Professional Information
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
              <h4>Department</h4>
              <input type='text' required/>
              <br></br>
              <select className='border-2 rounded-lg' name='department' onChange={handleChange}>
                {options.map((opt, index) => <option value={options[index]}>{opt}</option>)}
              </select>
              <br></br>
              <br></br>
              <h4>Roles</h4>
              <br></br>
              <select className='border-2 rounded-lg' name='role' onChange={handleChange}>
              {roles.map((opt, index) => <option value={roles[index]}>{opt}</option>)}
              </select>
              <br></br>
              <br></br>
              <h4>Upload Resume</h4>
              <input className='border-2 border-gray rounded-lg'type='file' name='file'  onChange={handleFileChange}/>
          </div>
          <br></br>
      </div>
    )
  }