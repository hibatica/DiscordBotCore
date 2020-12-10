const client = require("../index.js");

module.exports = {
  run: async function(/*event params*/) {
  console.log(`::logged in as ${client.user.tag}`);
  }
}