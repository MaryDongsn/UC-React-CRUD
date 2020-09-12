import React, {Component} from 'react';

class ListAllCPUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async fetchData() {
        try {
            let response = await fetch("http://localhost:8080/v1/cpus");
            let jsonResponse = await response.json();
            //console.log(jsonResponse);
            console.log(response.result);
            this.setState({
                data: jsonResponse.result
            });
            console.log(this.state.data);
            console.log(jsonResponse ? jsonResponse.length : 'json_data is null or undefined');
        } catch (e) {
            console.log(e);
        }
    }


    componentDidMount() {
        this.fetchData().then();
    }

    renderRows() {
        return (this.state.data.map(todo => {
                    return (<tr>
                        <td>{todo.id}</td>
                        <td>{todo.status}</td>
                        <td>{todo.label}</td>
                    </tr>);
                }
            )
        );
    }

    render() {

        return (
            <table className="table" cellSpacing="20" id="example">
                <thead>
                <tr>
                    <th className="">Id</th>
                    <th className="">Status</th>
                    <th className="">Label</th>
                </tr>
                </thead>
                <tbody id="example-body">
                {this.state.data.length && this.renderRows()}
                </tbody>
            </table>
        )
    }
}

export default ListAllCPUs;