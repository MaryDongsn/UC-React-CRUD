import React, {Component} from 'react';

class UpdateOneCpu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                id: props.id,
                status: "",
                label: "",
            },
            submitting: false,
            errors: {},
            serverFeedback: "",
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/cpus/" + this.state.formValue.id, {
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
        fetch("http://localhost:8080/v1/cpus/" + this.state.formValue.id, {
            method: "POST",
            body: JSON.stringify(this.state.formValue),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => {
            console.log(response);
            alert(response.message);
        })
    }

    handleInputChange = (event) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value
            }
        })
    }

    validate = (values) => {
        const {id, status, label, description, price} = values;
        const error = {};
        if (label.trim().length() == 0) {
            error.label = "label cannot be empty";
        }
        if (Number.isNaN(price * 1) || price * 1 <= 0) {
            error.price = "price must be a positive number";
        }
    }


    render() {
        console.log('render', this.state)
        const {id, status, label, description,price} = this.state.formValue;
        return (
            <div className="container">
                <h1>Update a CPU object:</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className={"form-group"}>
                        <label className="CPUStatus">CPU Status</label>
                        <input type="text" placeholder="Enter CPU Status" name="status" id='CPUStatus'
                               value={status}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPULabel">CPU Label</label>
                        <input type="text" id='CPULabel' name="label" placeholder="Enter CPU Label"
                               value={label}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">CPU Description</label>
                        <input type="text" id='CPUDescription' name="description"
                               placeholder="Enter CPU Description" value={description}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">ID</label>
                        <input type="text" name="id"
                               placeholder="Enter CPU id" value={id}
                               onInput={this.handleInputChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">CPU Price</label>
                        <input type="text" name="price"
                               placeholder="Enter CPU Price" value={price}
                               onInput={this.handleInputChange}/>
                    </div>

                    <button type={"submit"} className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}


export default UpdateOneCpu;