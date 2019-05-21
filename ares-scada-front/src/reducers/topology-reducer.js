export const TOPOLOGY_RECEIVED = "TOPOLOGY_RECEIVED";

const initialState = {
  datapaths: [],
  interfaces: []
};

const topology = (state = initialState, action) => {
  switch (action.type) {
    case TOPOLOGY_RECEIVED:
      return {
        ...state,
        datapaths: action.payload.datapaths,
        interfaces: action.payload.interfaces
      };
    default:
      return state;
  }
};

export default topology;
