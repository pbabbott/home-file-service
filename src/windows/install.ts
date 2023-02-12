var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Home File Service',
  description: 'A service to help manage files on my home computer.',
  script: 'C:\\home-file-service\\package\\lib\\src\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

svc.on('install',function(){
  svc.start();
});

svc.install();