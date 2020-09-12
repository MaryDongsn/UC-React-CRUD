import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    async componentDidMount() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            console.log(response);
            this.setState({
                data: jsonResponse
            });
            console.log(this.state.data);
            console.log(jsonResponse ? jsonResponse.length : 'json_data is null or undefined');
        } catch (e) {
            console.log(e);
        }
    }

    renderRows() {
        return (this.state.data.map(todo => {
                    return (<tr>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                    </tr>);
                }
            )
        );
    }

    render() {

        return (
            <table className="table" cellSpacing="0" id="example">
                <thead>
                <tr>
                    <th className="">Id</th>
                    <th className="">Title</th>
                    <th className="">Completed</th>
                </tr>
                </thead>
                <tbody id="example-body">
                {this.state.data.length && this.renderRows()}
                </tbody>
            </table>
        )

    }

}

export default List;