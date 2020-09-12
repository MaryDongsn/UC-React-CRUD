import React, {Component} from 'react';
import Counter from "./Components/Counter";
import List from "./Components/List";
import CountDown from "./Components/CountDown";
import ListAllCPUs from "./Components/ListAllCPUs";
import CreatNewCPU from "./Components/CreatNewCPU";





class App extends Component {
    render() {
        return(

            <div>

                <CreatNewCPU/>
            </div>

            )
    }
}
export default App;