class IoService {
  constructor() {
    this.io = null;
  }

  setIo(io) {
    this.io = io;
  }

  getIo() {
    return this.io;
  }
}

module.exports = new IoService();
