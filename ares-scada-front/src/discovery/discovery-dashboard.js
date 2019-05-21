import React from "react";
import Graph from "../graph/graph-component";
import DevicesTable from "./devices-table";

export default ({ topology }) => (
  <section className="section">
    <div className="container board-container">
      <div className="columns dashboard">
        <div className="column is-two-fifths topology-dashboard">
          <p> Topologia de Rede </p>
          <Graph topology={topology} />
        </div>
        <div className="column devices-dashboard">
          <p style={{ marginBottom: "10px" }}> Dispositivos de Rede </p>
          <DevicesTable datapaths={topology.datapaths} />
        </div>
      </div>
    </div>
  </section>
);
