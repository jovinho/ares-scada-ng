import { map, curry, find, propEq } from "ramda";

const SWITCHES = "switches";
const HOSTS = "hosts";

const GROUPS = {
  SWITCH: SWITCHES,
  IED: HOSTS
};

const transformDatapathInNode = function(datapath) {
  return {
    id: datapath.id,
    label: datapath.id,
    group: GROUPS[datapath.type]
  };
};

const findInterface = function(interfaces, nextInterface) {
  const result = find(propEq("macAddress", nextInterface), interfaces);
  console.log("RESULT", result);
  return result;
};

const transformInterfacesInEdges = curry(function(
  interfaces,
  networkInterface
) {
  console.log(
    "TRANSFORMING " +
      networkInterface.macAddress +
      " IN EDGE " +
      networkInterface.datapathId
  );
  const to = findInterface(interfaces, networkInterface.nextInterface);
  if (to) {
    const edgeObj = {
      physics: false,
      from: networkInterface.datapathId,
      to: findInterface(interfaces, networkInterface.nextInterface).datapathId
    };
    console.log("EDGE OBJECT", edgeObj);
    return edgeObj;
  }
  return null;
});

export const getGraphObjectFromTopology = function(topology) {
  const { datapaths, interfaces } = topology;

  const nodes = map(transformDatapathInNode, datapaths);
  console.log("NODES", nodes);
  const edges = map(transformInterfacesInEdges(interfaces), interfaces).filter(
    el => el !== null
  );

  const json = JSON.stringify({
    nodes: nodes,
    edges: edges
  });

  console.log("JSON ", json);

  return {
    nodes,
    edges
  };
};

/* edges: [
	{ from: 1, to: 2 },
	{ from: 1, to: 3 },
	{ from: 2, to: 4 },
	{ from: 2, to: 5 }
]*/
