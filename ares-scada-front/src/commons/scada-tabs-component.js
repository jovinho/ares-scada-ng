import React from "react";

import { DISCOVERY, EVENT, PROVISIONING } from "../reducers/tabs-reducer";
import ScadaTabItem from "./scada-tab-item-component";

class ScadaTabs extends React.Component {
  render() {
    return (
      <section className="hero has-background-info">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white">SCADA-NG based on ARES</h1>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth ">
            <div className="container">
              <ul>
                <ScadaTabItem
                  tabType="discovery"
                  isActive={this.props.selectedTab === DISCOVERY}
                  onClickTab={() => this.props.onSelectTab(DISCOVERY)}
                />
                <ScadaTabItem
                  tabType="event"
                  isActive={this.props.selectedTab === EVENT}
                  onClickTab={() => this.props.onSelectTab(EVENT)}
                />
                <ScadaTabItem
                  tabType="provisioning"
                  isActive={this.props.selectedTab === PROVISIONING}
                  onClickTab={() => this.props.onSelectTab(PROVISIONING)}
                />
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default ScadaTabs;
