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
            return jsonResponse;
        } catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
        let resultData = await this.fetchData()
        this.setState({
            data: resultData.result
        });
        console.log(this.state.data);
    }

    renderRows() {
        return (this.state.data.map(item => {
                    return (<tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.status}</td>
                        <td>{item.label}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
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
                    <th className="">Price</th>
                    <th className="">Description</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.length && this.renderRows()}
                </tbody>
            </table>
        )
    }
}

export default ListAllCPUs;