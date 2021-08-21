import React, {FC, useEffect, useState} from 'react'
import { message, Spin} from "antd";
import storageUtils from '../util/storageUtil'
import {RouteComponentProps, withRouter} from "react-router-dom";
interface IProps extends RouteComponentProps{}
const Exit:FC<IProps> = (props:IProps)=>{

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        let time = setTimeout(()=>{
            storageUtils.removeUser()
            message.success("退出成功")
            setFlag(false)
            props.history.replace("/login")
        },Math.random()*1400)
        return ()=>{
            clearTimeout(time)
        }
    },[props]);

    return (
        <>
            <Spin
                tip='正在退出登录中...'
                size='large'
                style={{display:flag?'block':'none'}}
            />
        </>
    )
}

export default withRouter(Exit)