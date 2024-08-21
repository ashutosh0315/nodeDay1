
import * as events from 'events'
let emitter = new events.EventEmitter();

function doATask(status){
  if(status='success') emitter.emit('success');
  else emitter.emit('failure');
}

emitter.addListener('taskSuccess',() => {
  console.log('Task completed successfully hurray !');
  
});
emitter.on('taskFailure',() => {
  console.log('Task failed oops !');
  
});
