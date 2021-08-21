import {ReactNode,lazy} from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from '@ant-design/icons';
const  FocusOnInput = lazy(()=>import('../component/FouceOnInput'))
const APage = lazy(()=>import("../component/APage")) ;
const Page404 = lazy(()=>import('./Page404'));
const AppUser = lazy(()=>import('../EditApp'))
const Exit = lazy(()=>import('../component/Exit'))
const Websocket = lazy(()=>import('../assets/Websocket'))
const B = lazy(()=>import('../component/BPage'))
const Test = lazy(()=>import('../component/Test'))

export interface IRouter{
    key:string,
    path:string,
    title:string,
    exact?:boolean,
    component?:ReactNode,
    icon?:ReactNode,
    children ?:IRouter[]
}

export const MyRouter:IRouter[] = [
    {
        key:'/Test',
        path:'/Test',
        title:'Test',
        component:<Test/>,
        icon:<DesktopOutlined/>
    },
    {
        key:'/Websocket',
        path:'/Websocket',
        title:'Websocket',
        component:<Websocket/>,
        icon:<DesktopOutlined/>
    },
    {
        key:'/State',
        path:'/State',
        title:'State',
        component:<FocusOnInput/>,
        icon:<DesktopOutlined/>
    },
    {
        key:'/AppUser',
        path:'/AppUser',
        title:'AppUser',
        component:<AppUser/>,
        icon:<DesktopOutlined/>
    },
    {
        key:'/b',
        path:'/b',
        title:'b',
        icon:<PieChartOutlined/>,
        component:<B/>,
        children:[
            {
                key:'/b/a',
                path:'/b/a',
                title:'a',
                component:<APage/>,
            }
        ]
    },
    {
        //路由匹配规则是从上往下，如果遇到路径找不到，那么就404
        key:'/Page404',
        path:'/Page404',
        title:'404',
        component:<Page404/>,
        icon:<FileOutlined/>
    },
    {
        //路由匹配规则是从上往下，如果遇到路径找不到，那么就404
        key:'/Exit',
        path:'/Exit',
        title:'退出登录',
        component:<Exit/>,
        icon:<FileOutlined/>
    }
]