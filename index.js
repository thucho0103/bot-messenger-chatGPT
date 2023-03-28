const { MessengerClient } = require('messaging-api-messenger');
const data = require('./data.json')

// get accessToken from facebook developers website
const client = new MessengerClient({
  accessToken: data.key,
});

client.sendText('100006307393122', 'Hello World').then(() => {
  console.log('sent');
});
