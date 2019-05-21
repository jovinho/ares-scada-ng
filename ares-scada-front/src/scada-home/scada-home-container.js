import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as R from "ramda";
import ScadaHome from "./scada-home-component";

import {
  requestTopologySocketAction,
  requestEventsSocketAction,
  requestProvisioningSocketAction
} from "../socket/socket-action-service";
import { TAB_SELECTED } from "../reducers/tabs-reducer";
import {
  PROVISIONING_SOURCE_CHANGED,
  PROVISIONING_DESTINATION_CHANGED
} from "../reducers/provisioning-reducer";

// const Counter = ...

const mapStateToProps = state => {
  return {
    selectedTab: R.path(["tabs", "selectedTab"], state),
    topology: R.propOr({}, "topology", state),
    events: R.pathOr([], ["event", "events"], state),
    isSocketConnected: R.pathOr(false, ["dashboard", "socketConnected"], state),
    shouldRequestTopology: R.pathOr(
      false,
      ["dashboard", "shouldRequestTopology"],
      state
    ),
    provisioningSource: R.path(["provisioning", "source"], state),
    provisioningDestination: R.path(["provisioning", "destination"], state),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    onSelectTab: tabName => dispatch({ type: TAB_SELECTED, payload: tabName }),
    onChangeProvisioningSource: dpId =>
      dispatch({ type: PROVISIONING_SOURCE_CHANGED, payload: dpId }),
    onChangeProvisioningDestination: dpId =>
      dispatch({ type: PROVISIONING_DESTINATION_CHANGED, payload: dpId })
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    requestTopology: socket => requestTopologySocketAction(socket),
    requestEvents: socket => requestEventsSocketAction(socket),
    requestProvisioning: socket => {
      console.log("CHAMOU", socket);
      requestProvisioningSocketAction(socket, stateProps.state);
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(ScadaHome)
);
