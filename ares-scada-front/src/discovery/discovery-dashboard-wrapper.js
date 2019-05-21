import React from "react";

import DiscoveryLoading from "./discovery-loading";
import DiscoveryDashboard from "./discovery-dashboard";

const DiscoveryDashboardWrapper = ({ isLoading, topology }) => {
  if (isLoading) {
    return <DiscoveryLoading />;
  } else {
    return <DiscoveryDashboard topology={topology} />;
  }
};

export default DiscoveryDashboardWrapper;
