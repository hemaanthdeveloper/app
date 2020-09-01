import React, { Component } from "react";
import { connect } from "react-redux";

// import { cartItems } from "../actions";
import PropTypes from "prop-types";

import Carasoul from "../component/Carasoul";
import BodyContainer from "../component/BodyContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <Carasoul />
        <BodyContainer />
        {/* <button
          className="btn btn-primary"
          onClick={() => {
            this.props.dispatch(cartItems("INCREMENT"));
          }}
        >
          INCREMENT
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.dispatch(cartItems("DECREMENT"));
          }}
        >
          DECREMENT
        </button> */}
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { myState: state };
};

export default connect(mapStateToProps)(Home);
