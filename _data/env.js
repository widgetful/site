require("dotenv").config();

module.exports = {
  deployment: process.env.DEPLOYMENT || "local",
};
