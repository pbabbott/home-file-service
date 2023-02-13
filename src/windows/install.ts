import { service } from './index'

service.on('install',function(){
  service.start();
});

service.install();