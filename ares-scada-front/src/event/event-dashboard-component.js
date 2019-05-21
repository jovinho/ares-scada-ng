import React from "react";

const EventDashboard = ({ events }) => {
  return (
    <section className="section">
      <div className="container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Datapath</th>
              <th>Paths</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={`event-${index}`}>
                <th>{event.id}</th>
                <td>{event.status}</td>
                <td>{event.datapath && event.datapath.join(", ")}</td>
                <td>{event.paths && event.paths.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EventDashboard;
