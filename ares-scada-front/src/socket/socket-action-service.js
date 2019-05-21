import { path, find, propEq } from "ramda";

export const requestTopologySocketAction = function(socket) {
  console.log("REQUISITANDO TOPOLOGIA, socket conectado: " + socket.connected);
  socket.emit("topology-request", {});
};

export const requestEventsSocketAction = function(socket) {
  console.log("REQUISITANDO EVENTOS", socket.connected);
  socket.emit("events-request", {});
};

const findDatapathById = function(datapaths, dpId) {
  return find(propEq("id", dpId), datapaths);
};

export const requestProvisioningSocketAction = function(socket, state) {
  const datapaths = path(["topology", "datapaths"], state);
  const source = path(["provisioning", "source"], state);
  const destination = path(["provisioning", "destination"], state);

  const dpSource = findDatapathById(datapaths, source);
  const dpDestination = findDatapathById(datapaths, destination);

  console.log(`REQUISITANDO PROVISIONAMENTO DE ${source} para ${destination}`);

  socket.emit("provisioning-request", {
    source: dpSource.mac,
    destination: dpDestination.mac
  });
};
