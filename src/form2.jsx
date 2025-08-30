import React,{useContext} from "react";
import {FormContext} from "./FormContext";

const Formed = () => {
    const {formData , updateFormData ,setInfo} = useContext(FormContext);

    return (
    <div>
        <h2>Personal information</h2>
        <input
        type="text"
        placeholder="Street"
        value={formData.name}
        onChange={(e)=>updateFormData("street",e.target.value)}
        />
        <br />
         <input
        type="text"
        placeholder="Adress"
        value={formData.name}
        onChange={(e)=>updateFormData("adress",e.target.value)}
        />
        <br />
        <button onClick={()=>setInfo(1)}>previous</button>
        <button onClick={()=>setInfo(3)}>Next</button>

    </div>
    );
};

export default Formed