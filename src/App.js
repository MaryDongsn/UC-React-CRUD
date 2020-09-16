import React, {Component} from 'react';
import ListAllCPUs from "./Components/ListAllCPUs";
import UpdateOneCPUWithValidation from "./Router/UpdateOneCPUWithValidation";
import CreatNewCpu from "./Components/CreatNewCPU";
import DeleteOneCpu from "./Components/DeleteOneCPU";
import RouterListAllCPUs from "./Router/RouterListAllCPUs";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"
import CreateCPU from "./Router/CreatCPU";


function App(){
    return(
        <Router>
            <div>
                <Link to="/">Home</Link> {'    |    '}
                <Link to="/cpus/2/edit">CPU ID 2</Link> {'    |    '}
                <Link to="/cpus/createNew">Creat new CPU </Link> {'    |    '}

            </div>

            <Switch>
                <Route path="/" exact>
                    <RouterListAllCPUs/>
                </Route>

                <Route path="/cpus/:id/edit">
                    <UpdateOneCPUWithValidation/>
                </Route>

                <Route path="/cpus/createNew">
                    <CreateCPU/>
                </Route>

            </Switch>
        </Router>
    )

}
export default App;