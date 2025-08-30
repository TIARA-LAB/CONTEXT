import React, {createContext,useState} from "react";
export const FormContext = createContext();
export const FormProvider = ({children}) =>{
    const [Info,setInfo]=useState(1);
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        street:"",
        address:"",
       
    });
    const updateFormData = (field,value) =>{
        setFormData((prev)=>({...prev,[field]:value,}));
    };
    return(
        <FormContext.Provider value={{
          Info,setInfo,formData,updateFormData
        }}>
            {children}
        </FormContext.Provider>
    );
};