const eventEmitter=require('events')

class myCustomeEmiter extends eventEmitter{
    constructor(){
        super()
this.greeting= "Hello"

    }
    greet(name){
        this.emit('greet', `${this.greeting} ${name}`)
    }
}


const myCustomEmitter = new myCustomeEmiter()

myCustomEmitter.on('greeting',(input)=>{
    console.log(`greeting event `, input)

})
myCustomEmitter.greet('vishvajeet')
