const axios = require("axios");

const ARES_API_URL = "http://localhost:3002";
//const ARES_API_URL = "https://ares-api.herokuapp.com";

const getTopology = function() {
  return axios
    .get(`${ARES_API_URL}/discovery`)
    .then(function(response) {
      console.log("DISCOVERY", response.data);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return null;
    });
};

const getEvents = function() {
  return axios
    .get(`${ARES_API_URL}/event`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return null;
    });
};

const requestProvisioning = function(provisioning) {
  return axios({
    url: `${ARES_API_URL}/provisioning/add`,
    method: "post",
    data: {
      source: provisioning.source,
      destination: provisioning.destination
    }
  })
    .then(function(response) {
      console.log("FUNCIONOU", response.data);
    })
    .catch(function(error) {
      console.log("ERRO", error);
    });
};

module.exports = {
  getTopology: getTopology,
  getEvents: getEvents,
  requestProvisioning: requestProvisioning
};
