import { SOCKET_CONNECTED } from "../reducers/dashboard-reducer";
import { requestEventsSocketAction } from "../socket/socket-action-service";
import SocketService from "../socket/socket-service";

export const UPDATE_INFO = "UPDATE_INFO";

export default store => next => action => {
  if (action.type === SOCKET_CONNECTED) {
    console.log("O MIDDLEWARE RECEBEU SOCKET CONNECTED");
    const socket = SocketService.getSocket();
    requestEventsSocketAction(socket);
  } else if (action.type === UPDATE_INFO) {
    console.log("BUSCANDO NOVAS INFORMAÇÕES");
    const socket = SocketService.getSocket();
    requestEventsSocketAction(socket);
  }
  next(action);
};
