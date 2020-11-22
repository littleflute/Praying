/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* api/addPlayer
* Adds an player to the system
*
* group6User Group6User Inventory item to add (optional)
* no response value expected for this operation
* */
const addPlayer = ({ group6User }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        group6User,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* id String query id.
* returns List
* */
const getPlayerGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addPlayer,
  getPlayerGET,
};
