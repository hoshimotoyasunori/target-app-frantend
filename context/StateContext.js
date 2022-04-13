import { createContext,useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props){
    const[selectedtarget, setSelectedtarget] = useState({ id : 0, taraget: "" });
    return(
        <StateContext.Provider
            value={{
                selectedtarget,
                setSelectedtarget,
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}