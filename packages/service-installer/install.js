const service = require('./index')

service.on('install',function(){
  service.start();
});

service.install();