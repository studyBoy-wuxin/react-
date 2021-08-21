import React, {Component, Suspense} from 'react';
import AppLayout from './component/AppLayout/AppLayout'
import RouterIteration from "./router/RouterIteration";
import Loading from "./assets/Loading";
import {MyRouter} from "./router";

class App2 extends Component {
    render() {
        return (
            <>
                <AppLayout>
                    <Suspense fallback={<Loading/>}>
                        <RouterIteration routeInfo={MyRouter}/>
                    </Suspense>
                </AppLayout>
            </>
        );
    }
}

export default App2;