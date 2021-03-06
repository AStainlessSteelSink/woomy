exports.run = async (client, message) => {
  const msg = await message.channel.send("⏱️ Please wait...");
  msg.edit(
    `:ping_pong: Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms, API Latency is ${Math.round(client.ws.ping)}ms`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
  requiredPerms: []
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "Displays bot latency in miliseconds.",
  usage: "ping"
};
