import {FC, useEffect, useRef, useState} from "react";
import {Button} from "antd";

interface IProps{}

const Websocket:FC<IProps> = ()=>{
    const ws = useRef<WebSocket | null>(null);
    //存放返回的信息
    const [message, setMessage] = useState('');
    //连接信息
    const [readyState, setReadyState] = useState('正在链接中');

    const start = ()=>{
        //如果没有连接成功，那么重新初始化连接一次
        if (ws.current?.readyState !== 1) {
            setMessage('正在链接');
            webSocketInit()
            return;
        }
        //使用send方法发送数据
        ws.current?.send("信息"+Math.random());
    }
    //初始化建立连接
    const webSocketInit = ()=>{
        const stateArr = [
            '正在链接中',
            '已经链接并且可以通讯',
            '连接正在关闭',
            '连接已关闭或者没有链接成功',
        ];
        if (!ws.current || ws.current.readyState === 3) {
            ws.current = new WebSocket('ws://localhost:8888/WebsocketServer/zs');
            console.log(ws.current?.readyState)
            // ??空值合并操作符:当左边为null或underfined时，就取右边的值，否则左边
            ws.current.onopen = () => setReadyState(stateArr[ws.current?.readyState ?? 0]);
            ws.current.onclose = () => setReadyState(stateArr[ws.current?.readyState ?? 0]);
            ws.current.onerror =() => setReadyState(stateArr[ws.current?.readyState ?? 0]);
            //	客户端接收服务端数据时触发
            ws.current.onmessage = e => {
                console.log(e)
                setMessage(e.data);
            }
        }
    }
    //在组件初始化时调用一次
    useEffect(() => {
        webSocketInit()
        //销毁的时候关闭连接
        return () => ws.current?.close()
    }, []);

    return (
        <div>
            {message}<br/>
            {readyState}
            <Button onClick={start}>发送</Button>
        </div>
    )
}

export default Websocket;
