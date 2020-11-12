/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* api/endGame
* ended a game
*
* group6Game Group6Game Inventory item to add (optional)
* no response value expected for this operation
* */
const endGame = ({ group6Game }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        group6Game,
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
* api/newGame
* Adds a new game to the system
*
* group6Game Group6Game Description of started game (optional)
* no response value expected for this operation
* */
const newGame = ({ group6Game }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        group6Game,
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
  endGame,
  newGame,
};
