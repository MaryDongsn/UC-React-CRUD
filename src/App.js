import React, {Component} from 'react';
import Counter from "./Components/Counter";
import List from "./Components/List";
import CountDown from "./Components/CountDown";
import ListAllCPUs from "./Components/ListAllCPUs";
import UpdateOneCpu from "./Components/UpdateOneCPU";
import CreatNewCpu from "./Components/CreatNewCPU";
import Creat from "./Components/Creat";






class App extends Component {
    render() {
        return(

            <div>

                <CreatNewCpu/>
            </div>

            )
    }
}
export default App;