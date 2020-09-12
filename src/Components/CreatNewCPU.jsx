import React, {Component} from 'react';

class CreatNewCpu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus", {
            method: "GET",
        }).then(response => response.json()).then(response => {
            this.setState({
                ...response.result
            })
        })
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        fetch("http://localhost:8080/v1/cpus", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            console.log(response);
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div id="CPU_Created">
                    <form className="form">
                        <p>
                            Create a new CPU object:
                        </p>

                        <div className={"form-group"}>
                            <label htmlFor="CPUStatus">CPU Status</label>
                            <input type="text" placeholder="Enter CPU Status" name="CPUStatus" id='CPUStatus'
                                   value={this.state.status}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="CPULabel">CPU Label</label>
                            <input type="text" id='CPULabel' name="CPULabel" placeholder="Enter CPU Label"
                                   value={this.state.label}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="CPUDescription">CPU Description</label>
                            <input type="text" id='CPUDescription' name="CPUDescription"
                                   placeholder="Enter CPU Description" value={this.state.description}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatNewCpu;