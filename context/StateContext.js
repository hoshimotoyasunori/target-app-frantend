import { createContext,useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props){
    const[selectedlarge, setSelectedlarge] = useState({ id : 0, large: ""});
    const[selectedmiddle, setSelectedmiddle] = useState({ id : 0, middle:""});
    const[selectedtask, setSelectedtask] = useState({ id : 0, task:""});
    
    return(
        <StateContext.Provider
            value={{
                selectedlarge,
                setSelectedlarge,
                selectedmiddle,
                setSelectedmiddle,
                selectedtask,
                setSelectedtask,
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}