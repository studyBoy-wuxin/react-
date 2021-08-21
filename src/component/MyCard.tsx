import React, {FC} from 'react'
import {Card} from "antd";

interface IProps{
    title:string,
    bordered:boolean,
    content:string[]
}

const MyCard:FC<IProps> = (props:IProps)=>{

    return (
        <>
            <Card title={props.title} bordered={props.bordered} style={{ width: 300 }}>
                {
                    props.content.map((item)=>(
                        <p>
                            {item}
                        </p>
                    ))
                }
            </Card>
        </>
    )
}
export default MyCard