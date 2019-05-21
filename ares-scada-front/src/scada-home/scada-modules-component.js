import React from "react";
import { DISCOVERY, EVENT } from "../reducers/tabs-reducer";
import DiscoveryDashboardWrapper from "../discovery/discovery-dashboard-wrapper";
import EventDashboard from "../event/event-dashboard-component";
import ProvisioningDashboard from "../provisioning/provisioning-dashboard-component";

const ScadaModulesComponent = ({
  selectedTab,
  topology,
  isLoading,
  events,
  provisioningSource,
  provisioningDestination,
  onChangeProvisioningSource,
  onChangeProvisioningDestination,
  requestProvisioning
}) => {
  switch (selectedTab) {
    case DISCOVERY:
      return (
        <DiscoveryDashboardWrapper isLoading={isLoading} topology={topology} />
      );
    case EVENT:
      return <EventDashboard events={events} />;
    default:
      return (
        <ProvisioningDashboard
          datapaths={topology.datapaths}
          provisioningSource={provisioningSource}
          provisioningDestination={provisioningDestination}
          onChangeProvisioningSource={onChangeProvisioningSource}
          onChangeProvisioningDestination={onChangeProvisioningDestination}
          requestProvisioning={requestProvisioning}
        />
      );
  }
};

export default ScadaModulesComponent;
