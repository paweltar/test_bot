var Slack = require("@slack/client");
var RtmClient = Slack.RtmClient;
var RTM_EVENTS = Slack.RTM_EVENTS;

var token = process.env.API_TOKEN;

var rtm = new RtmClient(token, { logLevel: "info" });
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function(message) {
  var channel = message.channel;
  var text = message.text;
  rtm.sendMessage(text, channel);
});
