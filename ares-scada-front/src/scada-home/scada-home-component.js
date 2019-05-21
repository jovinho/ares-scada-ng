import React from "react";
import Header from "./components/header-component";

import io from "socket.io-client";
import * as socketEventService from "../socket/socket-event-service";

import ScadaTabs from "../commons/scada-tabs-component";
import ScadaModules from "./scada-modules-component";
import SocketService from "../socket/socket-service";

const WEBSOCKET_API_URL = "http://localhost:3000";
//const WEBSOCKET_API_URL = "https://ares-scada-server.herokuapp.com/";

class ScadaHome extends React.Component {
  state = {
    socket: null,
    isLoading: true
  };

  constructor(props) {
    super(props);
    const socket = io(WEBSOCKET_API_URL);
    this.socket = socket;
    SocketService.setSocket(socket);
  }

  componentDidMount() {
    socketEventService.init(this.socket, this.props.dispatch);
  }

  render() {
    if (this.props.isSocketConnected && this.props.shouldRequestTopology) {
      this.props.requestTopology(this.socket);
    }
    return (
      <div>
        <Header />
        <ScadaTabs
          topology={this.props.topology}
          selectedTab={this.props.selectedTab}
          onSelectTab={this.props.onSelectTab}
        />
        <ScadaModules
          selectedTab={this.props.selectedTab}
          topology={this.props.topology}
          events={this.props.events}
          isLoading={this.props.isLoading}
          provisioningSource={this.props.provisioningSource}
          provisioningDestination={this.props.provisioningDestination}
          onChangeProvisioningSource={this.props.onChangeProvisioningSource}
          onChangeProvisioningDestination={
            this.props.onChangeProvisioningDestination
          }
          requestProvisioning={this.props.requestProvisioning}
        />
      </div>
    );
  }
}

export default ScadaHome;
