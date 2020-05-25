import React, { Component } from 'react';
import FilterComponent from './FilterComponent';

export default class SeachComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSeach = this.handleSeach.bind(this);
    this.state = {
      searchStr: '',
    }
  }

  handleSeach = (event) => {
    let searchStr = event.target.value.toLowerCase();
    this.setState({
      searchStr: searchStr
    }, () => {
      this.refs.child.handleFilter();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <form >
              <label ><b>Datafoundry Assignment - Simple Search</b></label>
              <div className="row">
                <div className="form-group col-lg-6 ">
                  <input type="text" className="form-control"
                    placeholder="Type first name here.."
                    value={this.state.searchStr}
                    onChange={this.handleSeach} />
                </div>
              </div>
              <FilterComponent
                searchStr={this.state.searchStr}
                ref="child"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
