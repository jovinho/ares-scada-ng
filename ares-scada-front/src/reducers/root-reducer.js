import { combineReducers } from "redux";
import topologyReducer from "./topology-reducer";
import dashboardReducer from "./dashboard-reducer";
import tabsReducer from "./tabs-reducer";
import eventReducer from "./event-reducer";
import provisioningReducer from "./provisioning-reducer";

export default combineReducers({
  topology: topologyReducer,
  dashboard: dashboardReducer,
  event: eventReducer,
  tabs: tabsReducer,
  provisioning: provisioningReducer
});
