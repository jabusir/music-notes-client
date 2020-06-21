import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

function PrivateRoute({ component: Component, auth, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            auth? (
            <Component {...props} />
          ) : (
            <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
          )
        }
      />
    );
  }

const mapStateToProps = (state) => ({ auth: state.user.token });
export default connect(mapStateToProps)(PrivateRoute);