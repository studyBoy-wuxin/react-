import React, {FC, useEffect, useState} from 'react'
interface IProps{

}
const TestHook:FC<IProps> = (props:IProps)=>{

    const [num,setNum] = useState<number>(1);

    useEffect(() => {
        console.log(123)
        return () => {
            console.log('componentwillUnMount')
        };
    },[num]);


    return (
        <>
            {num}
            <button onClick={()=>{setNum(num+1)}}>点击</button>
        </>
    )
}
export default TestHook
