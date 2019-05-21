export const PROVISIONING_SOURCE_CHANGED = "PROVISIONING_ORIGIN_CHANGED";
export const PROVISIONING_DESTINATION_CHANGED =
  "PROVISIONING_DESTINATION_CHANGED";

const initialState = {
  source: "Datapath",
  destination: "Datapath"
};

const topology = (state = initialState, action) => {
  switch (action.type) {
    case PROVISIONING_SOURCE_CHANGED:
      return {
        ...state,
        source: action.payload
      };
    case PROVISIONING_DESTINATION_CHANGED:
      return {
        ...state,
        destination: action.payload
      };
    default:
      return state;
  }
};

export default topology;
