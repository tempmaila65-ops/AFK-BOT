const mineflayer = require("mineflayer");
const config = require("./settings");
const startMovement = require("./movement");

function createBot() {
  const username = config.bot.username;

  const bot = mineflayer.createBot({
    host: config.server.host,
    port: config.server.port,
    username,
    version: config.server.version,
    auth: config.server.auth
  });

  bot.once("spawn", () => {
    console.log(`Joined: ${username}`);
    startMovement(bot, config);
  });

  bot.on("kicked", (reason) => console.log(`Kicked: ${reason}`));
  bot.on("error", (err) => console.error(`Error: ${err.message}`));
  bot.on("end", () => {
    console.log("Reconnecting...");
    setTimeout(createBot, config.reconnect.delayMs);
  });
}

createBot();
