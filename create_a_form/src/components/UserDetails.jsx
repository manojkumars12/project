import { useState, memo ,useEffect, useRef} from "react"

export default function UserDetails(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    return (
        <div>
            <FistName setFirstName={setFirstName}></FistName>           
            <LastName setLastName={setLastName}></LastName> 
            <EmailInfo setEmail={setEmail}></EmailInfo>
            <ContactInfo setContact={setContact}></ContactInfo>
            <GenderInfo setGender={setGender}></GenderInfo>
        </div>
    )
}

const FistName = memo(function ({setFirstName}){
    const inputRef = useRef();
    useEffect(() => {
        const handleFocus = () => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          };
          handleFocus();
    },[])
    
   return (
    <div>
<h4>First Name*</h4><br></br>
            <input ref = {inputRef} placeholder="Enter Fist Name..." onChange={(e) => {
                setFirstName(e.target.value);
            }} />
    </div>
   )    
});

const LastName = memo(({setLastName}) => {
    return (
        <div>
<h4>Last Name*</h4>
            <input placeholder="Enter Last Name..." onChange={(e) => {
                setLastName(e.target.value);
            }}/>
        </div>
    )
})

const EmailInfo = memo(({setEmail}) => {
    return <div>
        <h4>Email*</h4>
        <input placeholder="Enter your email.." onChange={(e) => setEmail(e.target.value)}></input>
    </div>
})

const ContactInfo = memo(({setContact}) => {
    return <div>
        <h4>Contact*</h4>
        <input placeholder="Enter mobile number" onChange={(e) => setContact(e.target.value)}/>
    </div>
})

const GenderInfo = memo(({setGender}) => {
    return <div>
        <h4>Gender*</h4>
        <input type="radio" name="options" value={"option1"} onChange={(e) => setGender(e.target.value)}/><b>Male</b>
        <input type="radio" name="options" value={"option2"} onChange={(e) => setGender(e.target.value)}/><b>Female</b>
        <h4>File*</h4>
        <input type="file" placeholder="Select file" required/>
        <h4>Select Drop Down</h4>
        <select>
            <option value={""}>----</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
        </select>
    </div>
})
