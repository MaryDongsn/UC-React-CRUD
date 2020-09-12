import React, {Component} from 'react';
import Counter from "./Components/Counter";
import List from "./Components/List";
import CountDown from "./Components/CountDown";
import ListAllCPUs from "./Components/ListAllCPUs";
import UpdateOneCpu from "./Components/UpdateOneCPU";
import CreatNewCpu from "./Components/CreatNewCPU";
import DeleteOneCpu from "./Components/DeleteOneCPU";








class App extends Component {
    render() {
        return(

            <div>
                <ListAllCPUs/>
                <CreatNewCpu/>
                <UpdateOneCpu id={34}/>
                <DeleteOneCpu id={38}/>
            </div>

            )
    }
}
export default App;