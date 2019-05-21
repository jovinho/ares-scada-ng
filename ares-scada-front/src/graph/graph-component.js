import React from "react";
import Graph from "react-graph-vis";

import { getGraphObjectFromTopology } from "./graph-service";

const graph = nodes => ({
  nodes: nodes,
  edges: []
});

const options = {
  autoResize: true,
  layout: {
    hierarchical: {
      enabled: false,
      direction: "LR",
      sortMethod: "hubsize",
      nodeSpacing: 150
    }
  },
  groups: {
    hosts: {
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf1b9",
        size: 50,
        color: "#57169a"
      }
    },
    switches: {
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf0a0",
        size: 50,
        color: "#57169a"
      }
    }
  },
  edges: {
    arrows: {
      to: false
    },
    width: 1,
    color: "#000000"
  }
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

export default ({ topology }) => {
  console.log("TOPOLOGY", topology);
  const graph = getGraphObjectFromTopology(topology);
  return (
    <div>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: "400px" }}
      />
    </div>
  );
};
