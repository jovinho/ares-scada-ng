import React from "react";
import { filter } from "ramda";
import SocketService from "../socket/socket-service";

const ProvisioningDashboard = ({
  datapaths = [],
  provisioningSource,
  provisioningDestination,
  onChangeProvisioningSource,
  onChangeProvisioningDestination,
  requestProvisioning
}) => {
  const ieds = filter(dp => dp.type === "IED", datapaths);
  return (
    <section className="section">
      <p className="provisioning-paragraph">
        Selecione os datapaths para serem provisionados
      </p>
      <div className="container provisioning">
        <div className="column is-three-fifths provisioning">
          <div className="datapaths-group">
            <div class="control has-icons-left">
              <div class="select provisioning-select">
                <select
                  value={provisioningSource}
                  onChange={ev => onChangeProvisioningSource(ev.target.value)}
                >
                  <option>Datapath</option>
                  {ieds.map(ied => (
                    <option>{ied.id}</option>
                  ))}
                </select>
              </div>
              <span class="icon is-left">
                <i class="fas fa-desktop" />
              </span>
            </div>
            <div class="control has-icons-left">
              <div class="select provisioning-select">
                <select
                  value={provisioningDestination}
                  onChange={ev =>
                    onChangeProvisioningDestination(ev.target.value)
                  }
                >
                  <option>Datapath</option>
                  {ieds.map(ied => (
                    <option>{ied.id}</option>
                  ))}
                </select>
              </div>
              <span class="icon is-left">
                <i class="fas fa-desktop" />
              </span>
            </div>
          </div>
          <button
            className="button is-success"
            style={{ "margin-left": "30px" }}
            onClick={() => requestProvisioning(SocketService.getSocket())}
          >
            Provisionar enlace
          </button>
        </div>
        <div className="column" />
      </div>
    </section>
  );
};

export default ProvisioningDashboard;
