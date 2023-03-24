var WindowsService = require('node-windows').Service;

// Create a new service object
const service = new WindowsService({
  name:'Home File Service',
  description: 'A service to help manage files on my home computer.',
  script: 'C:\\home-file-service\\package\\lib\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});


module.exports = service