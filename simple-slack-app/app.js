const { App } = require('@slack/bolt')
require('dotenv').config()

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
  //start your app
  await app.start(process.env.PORT || 3000);
  console.log('Bolt app is running on port 3000');
})();
