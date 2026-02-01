module.exports = function startMovement(bot, config) {
  const { minDelayMs, maxDelayMs } = config.antiAFK;

  function activity() {
    if (!bot.entity) return setTimeout(activity, 10000);

    const yaw = Math.random() * Math.PI * 2;
    const pitch = (Math.random() - 0.5) * Math.PI * 0.4;
    bot.look(yaw, pitch);

    if (Math.random() > 0.85) {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 150);
    }

    const moveRand = Math.random();
    if (moveRand > 0.7) {
      const direction = Math.random() > 0.5 ? "forward" : "back";
      bot.setControlState(direction, true);
      setTimeout(() => bot.setControlState(direction, false), 500);
    }

    if (Math.random() > 0.9) {
      bot.setControlState("sneak", true);
      setTimeout(() => bot.setControlState("sneak", false), 1000);
    }

    const delay = minDelayMs + Math.random() * (maxDelayMs - minDelayMs);
    setTimeout(activity, delay);
  }

  setTimeout(activity, 5000);
};