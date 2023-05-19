
var events =require('events');

var emitter = new events.EventEmitter();
const customEventHandler = function(){
    console.log('varcas')
}
emitter.on('excutes', customEventHandler);
emitter.emit('excutes');