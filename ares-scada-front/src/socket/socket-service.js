class SocketService {
  constructor() {
    this.socket = null;
  }

  hasSocket() {
    return this.socket !== null;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  getSocket() {
    return this.socket;
  }
}

export default new SocketService();
