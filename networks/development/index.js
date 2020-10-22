module.exports = {
  accounts: {
    ...require("./accounts.json"),
  },
  assets: {
    ...require("./assets.json"),
    ...require("./gen/assets.json"),
  },
  contracts: {
    ...require("./contracts.json"),
    ...require("./gen/contracts.json"),
  },
};
