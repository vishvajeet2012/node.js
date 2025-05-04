const eventEmitter =require('events');
class MyEventEmitter extends eventEmitter{}

///// register a listner 
MyEventEmitter.on('greet',(name)=>{
    console.log(`hello ${name}`);
})
myFirstEmitter.emit("greet","vishvajeet")