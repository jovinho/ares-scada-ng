const api = require("../api/ares-api");

const topologyRequestEvent = function(socket) {
  socket.on("topology-request", function(obj) {
    console.log("Topologia requisitada");

    api.getTopology().then(function(topology) {
      socket.emit("topology-received", topology);
    });
  });
};

const eventsRequestEvent = function(socket) {
  socket.on("events-request", function(obj) {
    console.log("Eventos requisitados");

    api.getEvents().then(function(events) {
      socket.emit("events-received", events);
    });
  });
};

const provisioningRequestEvent = function(socket) {
  socket.on("provisioning-request", function(obj) {
    console.log("ADICIONANDO PROVISIONAMENTO");
    api.requestProvisioning(obj).then(function(response) {
      console.log("FUNFOU");
    });
  });
};

const init = function(io) {
  io.on("connection", function(socket) {
    console.log("a user connected", socket.id);

    topologyRequestEvent(socket);
    eventsRequestEvent(socket);
    provisioningRequestEvent(socket);
  });
};

module.exports = {
  init: init
};
