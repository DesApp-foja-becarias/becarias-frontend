import { createContext,useState } from "react";

export const BecariaContext = createContext()

const DatosBecariaContext = ({children}) => {

    const [datosBecariaEdit, setDatosBecariaEdit] = useState({something: "something"});
    const [isEditable, setIsEditable] = useState(false);

    function setBecariaInitialState(state){
        setDatosBecariaEdit(state);
    }
    function updateBecariaState(e){
        setDatosBecariaEdit({...datosBecariaEdit, [e.target.name]: e.target.value});
    }
    return (
        <BecariaContext.Provider value={{isEditable , setIsEditable,datosBecariaEdit,updateBecariaState,setBecariaInitialState }}>
            {children}
        </BecariaContext.Provider>
    )
}

export default DatosBecariaContext;