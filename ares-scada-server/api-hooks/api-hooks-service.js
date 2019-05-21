const ioService = require("../socket.io/io-service");

const treatHookRequest = function(hookBody) {
  switch (hookBody.type) {
    case "EVENT":
      console.log("EVENT HOOK");
      ioService.getIo().emit("event-received", hookBody.payload);
      break;
    case "DISCOVERY":
      console.log("DISCOVERY");
      break;
    default:
      break;
  }
};

module.exports = {
  treatHookRequest: treatHookRequest
};
