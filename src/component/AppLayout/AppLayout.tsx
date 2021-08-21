import React, { FC, useEffect, useState} from 'react';
import LinkIteration from '../../router/LinkIteration'
import {MyRouter} from '../../router'
import {Avatar, Layout, message} from 'antd';
import './index.css'
import AppBreadcrumb from "../AppBreadcrumb/AppBreadcrumb";
import { UserOutlined } from '@ant-design/icons';
import {RouteComponentProps, withRouter} from 'react-router-dom'
import storageUtils from '../../util/storageUtil'
import {refreshToken} from '../../Hooks/index'
const { Header, Content, Footer, Sider } = Layout;

interface IProps extends RouteComponentProps{children?:any }

const AppLayout:FC<IProps> = (props:IProps)=>{
    const [collapsed,setCollapsed] = useState(false)

    const onCollapse = (newCollapsed:boolean) =>  setCollapsed(newCollapsed)

     useEffect(() => {
         (async ()=>{
             //返回一个对象则更新state，null则不操作
             const user = storageUtils.getUser()
             if(props.location.pathname !== '/State' && !user.token){
                 message.error("用户尚未登录")
                 props.history.push("/State")
             }
             if(user.token){
                 const data = await refreshToken({token:user.token})
                 if(data.flag === 'fail'){
                     storageUtils.removeUser()
                     storageUtils.saveUser({token:data.token})
                 }
             }
         })()
    }, [props]);

    return (
        <>
            <Layout className='components-AppLayout' style={{ minHeight: '100vh' }}>

                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    {/*放置路由链接信息*/}
                    <LinkIteration routeInfo={MyRouter} theme={'dark'}/>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <div className='site-layout-Avatar'>
                            <Avatar size={50} icon={<UserOutlined/>} />
                            <span>欢迎您,邹泽世</span>
                        </div>
                    </Header>

                    <Content style={{ margin: '16px 16px'}}>
                        <AppBreadcrumb />
                        {/*children中存放的是Route路由信息*/}
                        {props.children}
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}


export default withRouter(AppLayout);