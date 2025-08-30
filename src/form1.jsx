import React,{useContext} from "react";
import {FormContext} from "./FormContext";

const Form = () => {
    const {formData , updateFormData ,setInfo} = useContext(FormContext);

    return (
    <div>
        <h2>Personal information</h2>
        <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e)=>updateFormData("name",e.target.value)}
        />
        <br />
         <input
        type="email"
        placeholder="Email"
        value={formData.name}
        onChange={(e)=>updateFormData("email",e.target.value)}
        />
        <br />
        <button onClick={()=>setInfo(2)}>Next</button>
    </div>
    );
};

export default Form