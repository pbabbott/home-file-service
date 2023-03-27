const service = require('./index')

service.on('install',function(){
  service.start();
});

service.logOnAs.account = 'pbabb'
service.logOnAs.password = process.env.ACCOUNT_PASSWORD


service.install();