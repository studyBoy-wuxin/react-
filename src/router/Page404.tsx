import React, {Component} from 'react';
import {Button, Result} from "antd";
import {withRouter} from 'react-router-dom'

class Page404 extends Component<any,any> {

    onBack = ()=>{
        console.log(this.props)
        this.props.history.goBack()
    }
    render() {
        return (
            <>
                <Result
                    status="404"
                    title="404"
                    subTitle="所访问的页面不存在."
                    extra={<Button type="primary" onClick={this.onBack}>返回</Button>}
                />,
            </>
        );
    }
}

export default withRouter(Page404) ;