import React, { Component } from "react";
import { connect } from "react-redux";
import changeName from "../action/action";
class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      username: ""
    };
  }

  changeUserInput(event) {
    // console.log(event.target.value);
    this.setState({
      username: event.target.value
    });
  }
  changeName() {
    this.props.changeStateToAction(this.state.username);
  }
  render() {
    return (
      <div>
        <h1>Home {this.props.name}</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={this.changeUserInput.bind(this)}
        />
        <button onClick={this.changeName.bind(this)}>Change State</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    name: state.reducer.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateToAction: updateusername => {
      dispatch(changeName(updateusername));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
