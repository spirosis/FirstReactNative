import { createContext, useState } from "react";

interface RandomNumberContextType {
    num: number
    addNumber: (n: number) => void;
}

interface NumberProviderProps{
    children: ReactNone 
};

export const RandomNumberContext = createContext<RandomNumberContextType | undefined> (undefined);
export const NumberProvider : React.FC<NumberProviderProps> = ({children}) => {
    const [num, setNum] = useState([])
    const addNumber = (n: number) =>{
        setNum(prevNum =>[...prevNum, n])
    }
    return (

    )
}