import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const Confirmation =() => {
    const {formData ,setInfo} = useContext (FormContext);

    return(
        <div>
            <h2>Confirmation</h2>
            <p><b>Name:</b>{formData.name}</p>
            <p><b>Email:</b>{formData.email}</p>
            <p><b>Street:</b>{formData.street}</p>
            <p><b>Address:</b>{formData.address}</p>

            <button onClick={()=>setInfo(2)}>previous</button>
             <button onClick={()=>alert("Form Submitted!")}>Submit</button>
        </div>

    );
};
export default Confirmation ;