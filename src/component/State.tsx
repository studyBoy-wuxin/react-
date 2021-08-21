import React, {Component} from 'react';


//定义该类的props以及state需要的参数类型
interface IProps{
    name:string
}
interface IState{
    age:number
}
class State extends Component< IProps , IState > {
    constructor(props:IProps) {
        super(props);
        this.state={
            age : 0
        }
    }
    componentDidMount() {
        this.setState((state)=>({age:state.age+1}))
    }
    render() {
        return (
            <div>
                {this.props.name}
                <br/>
                {this.state.age}
            </div>
        );
    }
}

export default State;