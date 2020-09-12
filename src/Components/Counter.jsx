import React, {Component} from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    add = (event) =>{
        event.preventDefault();
        this.setState({
            count: this.state.count + 100
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.add}> Add 100</button>

            </div>
        );
    }
}

export default Counter;