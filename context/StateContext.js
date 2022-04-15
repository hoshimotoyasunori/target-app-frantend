import { createContext,useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props){
    const[selectedlarge, setSelectedlarge] = useState({ id : 0, large: ""});
    
    return(
        <StateContext.Provider
            value={{
                selectedlarge,
                setSelectedlarge,
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}