import React, {Component} from 'react';
import {isEmpty} from "../helper";
class UpdateOneCPUWithValidation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                id: props.id,
                status: "",
                label: "",
                description:"",
            },
            submitting: false,
            error: {},
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
        const error = this.validate(this.state.formValue);
        if (isEmpty(error)) {
            alert("no error")
            alert(error)
            this.setState(
                {
                    submitting: true,
                    error: {}
                }, () => {
                    fetch("http://localhost:8080/v1/cpus/" + this.state.formValue.id, {
                        method: "POST",
                        body: JSON.stringify(this.state.formValue),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => response.json()).then(response => {
                        console.log(response);
                        alert(response.message);
                        if (response.result) {
                            this.setState({
                                serverFeedback: response.result.message,
                                submitting: false,
                                formValue: {
                                    ...response.result
                                }
                            });
                        } else {
                            this.setState({
                                submitting: false,
                                serverFeedback: response.result.message
                            });
                        }
                    })
                })
        } else {
            this.setState({
                submitting: false,
                serverFeedback: "",
                error: error
            });
        }
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
        if (status.trim() == "") {
            error.status = "status cannot be empty";
        }
        if (label.trim() == "") {
            error.label = "label cannot be empty";
        }
        if (description.trim() == "") {
            error.description = "description cannot be empty";
        }
        if (Number.isNaN(price * 1) || price * 1 <= 0) {
            error.price = "price must be a positive number";
        }
        if (Number.isNaN(id * 1) || id * 1 <= 0) {
            error.id = "id must be a positive number";
        }
        return error;
    }

    render() {
        console.log('render', this.state)
        const {id, status, label, description, price} = this.state.formValue;
        const error = this.state.error;
        return (
            <div className="container">
                <h1>Update a CPU object:</h1>

                <form onSubmit={this.handleFormSubmit}>
                    {this.state.serverFeedback && <h2 className={"text-danger"}>{this.state.serverFeedback}</h2>}
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
                               onInput={this.handleInputChange}
                               className={`form-control ${error?.label ? "is-invalid" : "is-valid"}`}/>
                        {error.label && <div className="invalid-feedback">
                            {error.label}
                        </div>}

                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">CPU Description</label>
                        <input type="text" id='CPUDescription' name="description"
                               placeholder="Enter CPU Description" value={description}
                               onInput={this.handleInputChange}
                               className={`form-control ${error?.label ? "is-invalid" : "is-valid"}`}/>
                        {error.description && <div className="invalid-feedback">
                            {error.description}
                        </div>}


                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">ID</label>
                        <input type="text" name="id"
                               placeholder="Enter CPU id" value={id}
                               onInput={this.handleInputChange}
                               className={`form-control ${error?.price ? "is-invalid" : "is-valid"}`}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label className="CPUDescription">CPU Price</label>
                        <input type="text" name="price"
                               placeholder="Enter CPU Price" value={price}
                               onInput={this.handleInputChange}/>
                        {error.price && <div className="invalid-feedback">
                            {error.price}
                        </div>}
                    </div>
                    <button type={"submit"} className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}


export default UpdateOneCPUWithValidation;