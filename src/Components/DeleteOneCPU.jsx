import React, {Component} from 'react';

class DeleteOneCpu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:props.id,

        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus/" + this.state.id, {
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
        fetch("http://localhost:8080/v1/cpus/" + this.state.id, {
            method: "DELETE",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            console.log(response);
            alert(response.message);
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log('render', this.state)

        return (
            <div className="container">
                <h1>Delete a CPU object:</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className={"form-group"}>
                        <label className="CPUStatus">CPU Status</label>
                        <input type="text" placeholder="Enter CPU Status" name="status" id='CPUStatus'
                               value={this.state.status}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPULabel">CPU Label</label>
                        <input type="text" id='CPULabel' name="label" placeholder="Enter CPU Label"
                               value={this.state.label}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">CPU Description</label>
                        <input type="text" id='CPUDescription' name="description"
                               placeholder="Enter CPU Description" value={this.state.description}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">ID</label>
                        <input type="text"  name="id"
                               placeholder="Enter CPU id" value={this.state.id}
                               onInput={this.handleInputChange}/>
                    </div>

                    <button onSubmit={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}


export default DeleteOneCpu;