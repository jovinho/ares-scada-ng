import { TOPOLOGY_RECEIVED } from "../reducers/topology-reducer";
import { SOCKET_CONNECTED } from "../reducers/dashboard-reducer";
import { EVENTS_RECEIVED } from "../reducers/event-reducer";
import { showEventToast } from "../toast/toast-service";
import { UPDATE_INFO } from "../startup/startup-middleware";

const onTopologyReceived = function(socket, dispatch) {
  socket.on("topology-received", function(topology) {
    console.log("TOPOLOGY RECIEVED", topology);
    dispatch({
      type: TOPOLOGY_RECEIVED,
      payload: {
        ...topology
      }
    });
  });
};

const onEventsReceived = function(socket, dispatch) {
  socket.on("events-received", function(events) {
    console.log("EVENTS RECEIVED", events);
    dispatch({
      type: EVENTS_RECEIVED,
      payload: events
    });
  });
};

const onEventReceived = function(socket, dispatch) {
  socket.on("event-received", function(event) {
    console.log("EVENT RECEIVED");
    showEventToast(event);
    dispatch({
      type: UPDATE_INFO
    });
  });
};

export const init = function(socket, dispatch) {
  socket.on("connect", () => {
    console.log("SOCKET CONECTADO", socket.id);
    dispatch({
      type: SOCKET_CONNECTED
    });
  });

  onTopologyReceived(socket, dispatch);
  onEventsReceived(socket, dispatch);
  onEventReceived(socket, dispatch);
};
