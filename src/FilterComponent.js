import React, { Component } from 'react';
import nameInfo from './nameInfo.json';
const personData = nameInfo.personData;

export default class FilterComponent extends Component {

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            displayedData: personData
        }
    }

    handleFilter() {
        let searchedData = personData.filter((el) => {
            let seachValue = el.name.first.toLowerCase();
            return seachValue.indexOf(this.props.searchStr) !== -1
        })
        this.setState({
            displayedData: searchedData
        })
    }

    render() {
        return (
            <div className="row">
                <div className="form-group col-lg-6">
                    <table className="table" border='1' align='center' >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.displayedData &&
                                this.state.displayedData.map((key) => {
                                    return (
                                        <tr key={key._id}>
                                            <td> {key.name.first}</td>
                                            <td> {key.name.last}</td>
                                            <td> {key.gender}</td>
                                        </tr>
                                    );
                                })
                            }
                            {
                                this.state.displayedData.length === 0 &&
                                <tr><td colSpan='3' >No records found</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
