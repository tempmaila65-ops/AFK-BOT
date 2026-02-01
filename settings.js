module.exports = {
  server: {
    host: "yourserver.aternos.me",
    port: 25565,
    version: "1.20.4",
    auth: "offline"
  },
  bot: {
    usernamePrefix: "AFK Bot",
    usernameRandomDigits: 3
  },
  antiAFK: {
    minDelayMs: 5500,
    maxDelayMs: 13500
  },
  reconnect: {
    delayMs: 8000
  }
};