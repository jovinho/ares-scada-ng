import React from "react";

const ScadaTabItem = ({ tabType, isActive, onClickTab }) => {
  switch (tabType) {
    case "discovery":
      return (
        <li
          className={"tab " + (isActive ? "is-active" : "")}
          onClick={onClickTab}
        >
          <a>
            <span className="icon is-small">
              <i className="fas fa-network-wired" aria-hidden="true" />
            </span>
            <span>Discovery</span>
          </a>
        </li>
      );
    case "event":
      return (
        <li
          className={"tab " + (isActive ? "is-active" : "")}
          onClick={onClickTab}
        >
          <a>
            <span className="icon is-small">
              <i className="fas fa-bell" aria-hidden="true" />
            </span>
            <span>Alert</span>
          </a>
        </li>
      );
    case "provisioning":
      return (
        <li
          className={"tab " + (isActive ? "is-active" : "")}
          onClick={onClickTab}
        >
          <a>
            <span className="icon is-small">
              <i className="fas fa-download" aria-hidden="true" />
            </span>
            <span>Provisioning</span>
          </a>
        </li>
      );
    default:
      return null;
  }
};

export default ScadaTabItem;
