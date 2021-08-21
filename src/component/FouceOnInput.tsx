import React, {useState,useEffect,useRef} from 'react';
import {getA,TestJWT} from '../Hooks'
import {Button, Form, Input, message} from "antd";
import storageUtils from '../util/storageUtil'
const FouceOnInput = ()=>{
    //使用useRef
    const InputRef = useRef<HTMLInputElement>(null)
    const [flag, setFlag] = useState(false);

    //没有添加第二个参数，所以页面有参数变化就会重新渲染，相当于ComponentDidUpdate
    useEffect(()=>{
            //当ref绑定成功后，就focus
            InputRef && InputRef.current && InputRef.current.focus()
    })
    const get =async ()=>{
        const data =await getA({name:'zouzeshi'})
        console.log(data)
    }
    const onFinish = async (values: any)=>{
        console.log(values)
        try {
            const data = await TestJWT(values)
            storageUtils.saveUser(data)
            message.success("登陆成功")
        }catch (e) {message.error(e.message)}
    }
    return (
        <div>
            <input type='text' ref={InputRef}/>
            <button onClick={()=>setFlag(!flag)}>点击</button>
            <button onClick={get}>请求</button>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FouceOnInput;