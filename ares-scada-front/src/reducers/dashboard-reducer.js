import { TOPOLOGY_RECEIVED } from "./topology-reducer";
export const SOCKET_CONNECTED = "SOCKET_CONNECTED";

const initialState = {
  isLoading: true,
  socketConnected: false,
  shouldRequestTopology: true
};

const topology = (state = initialState, action) => {
  switch (action.type) {
    case TOPOLOGY_RECEIVED:
      return {
        ...state,
        isLoading: false,
        shouldRequestTopology: false
      };
    case SOCKET_CONNECTED:
      return {
        ...state,
        socketConnected: true
      };
    default:
      return state;
  }
};

export default topology;
