import { createContext,useState } from "react";
//import useFieldValidator from "../hooks/useValidator";

export const TutorContext = createContext()

const DatosTutorContext = ({children}) => {

    const [datosTutorEdit, setDatosTutorEdit] = useState({something: "something"});
    const [isEditable, setIsEditable] = useState(false);

    function setTutorInitialState(state){
        setDatosTutorEdit(state);
    }
    function updateTutorState(e){
        setDatosTutorEdit({...datosTutorEdit, [e.target.name]: e.target.value});
    }
    return (
        <TutorContext.Provider value={{isEditable , setIsEditable,datosTutorEdit,updateTutorState,setTutorInitialState }}>
            {children}
        </TutorContext.Provider>
    )
}

export default DatosTutorContext;