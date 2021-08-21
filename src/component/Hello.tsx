import React,{useContext} from "react";
import {ThemeContext} from '../App'
interface HelloProps {
    compiler: string;
    framework: string;
}
export const Hello =
    (props: HelloProps) =>{
        //
        const theme = useContext(ThemeContext)
        return (
            <h1 style={{color:theme.color}}>Hello from {props.compiler} and {props.framework}!</h1>
        )
    }


export const Hello2 :React.FC<HelloProps> =
    (props:HelloProps)=>
        <h1>hello2, {props.compiler} and {props.framework}</h1>

