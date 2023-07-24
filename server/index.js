const liveServer = require('live-server');

const params = {
  port: 5500,
  host: 'localhost',
  root: './client/index.html',
  open: false,
};

liveServer.start(params);
