import React from "react";

export default ({ datapaths }) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Datapath Id</th>
          <th>Datapath Name</th>
          <th>Model Name</th>
          <th>Vendor Name</th>
        </tr>
      </thead>
      <tbody>
        {datapaths &&
          datapaths.map((datapath, index) => (
            <tr key={`datapath-${index}`}>
              <th style={{ "text-align": "center" }}>{datapath.id}</th>
              <td>{datapath.name}</td>
              <td>{datapath.modelName}</td>
              <td>{datapath.vendorName}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
