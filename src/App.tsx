import React, {useState, Suspense} from 'react';
import {Hello,Hello2} from './component/Hello'
import {MyRouter} from "./router";
import FouceOnInput from './component/FouceOnInput'
import State from './component/State'
import LinkIteration from './router/LinkIteration'
import RouterIteration from './router/RouterIteration'
import Loading from './assets/Loading/'

//定义主题的接口，指定形状
interface ITheme {
  [name:string]:{
    color:string
  }
}
//定义dark和light两种主题颜色
const theme:ITheme={
  dark:{color:'green'},
  light:{color:'yellow'}
}
//将createContext暴露出去，以便需要用到该theme的子组件能够import
export const ThemeContext = React.createContext(theme.light)

function App() {
  const [MyTheme,setTheme] = useState(theme.light)

  return (
    <div>
       {/* <LinkIteration routeInfo={MyRouter}/>*/}
       {/* <Suspense fallback={<Loading/>}>*/}
       {/*     <RouterIteration routeInfo={MyRouter}/>*/}
       {/*</Suspense>*/}
       {/* <div>*/}
       {/*     <ThemeContext.Provider value={MyTheme}>*/}
       {/*         <Hello compiler='react' framework='react'></Hello>*/}
       {/*         <Hello2 compiler='react2' framework='react2'></Hello2>*/}
       {/*         <FouceOnInput/>*/}
       {/*         <button onClick={()=>{MyTheme === theme.light?setTheme(theme.dark) : setTheme(theme.light)}}>点我换色</button>*/}
       {/*         <br/>*/}
       {/*         <State name={'这是State组件'}/>*/}
       {/*     </ThemeContext.Provider>*/}
       {/* </div>*/}
    </div>
  );
}

export default App;
