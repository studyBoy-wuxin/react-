import React, {Component} from 'react';
import {Card} from "antd";

interface IProps{
    contents:string[],
    title:string,
    bordered:boolean
}

class BPage extends Component {


    render() {
        const Test = (props:IProps) => (
            <Card title={props.title} bordered={props.bordered} style={{ width: 300 }}>
                {props.contents.map(item=>(<p>{item}</p>))}
            </Card>
        )
        return (
            <div>
                <Test contents={["123","234","345"]} title={"我是card组件"} bordered={true}/>
            </div>
        );
    }
}

export default BPage;