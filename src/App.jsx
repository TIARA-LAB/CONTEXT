import React , {useContext} from "react";
import { FormContext, FormProvider } from "./FormContext";

import Form from "./form1";
import Formed from "./form2";
import Confirmation  from "./Confirm";
 
const FormInfo= () => {
  const {Info} = useContext(FormContext);

  switch (Info) {
    case 1 :
      return <Form/>;
      case 2 :
        return <Formed />;
      case 3:
        return <Confirmation />;

        default:
          return <Form/>
  }
};

function App () {
  return (
    <FormProvider>
      <div style={{margin:"50px"}} >
        <h1>Multi- form</h1>
        <FormInfo/>
        </div>      
    </FormProvider>
  );
};

export default App