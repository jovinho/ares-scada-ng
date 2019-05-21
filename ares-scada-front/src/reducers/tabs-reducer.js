export const DISCOVERY = "discovery";
export const EVENT = "event";
export const PROVISIONING = "provisioning";

export const TAB_SELECTED = "TAB_SELECTED";

const initialState = {
  selectedTab: DISCOVERY
};

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case TAB_SELECTED:
      return {
        ...state,
        selectedTab: action.payload
      };
    default:
      return state;
  }
};

export default tabs;
