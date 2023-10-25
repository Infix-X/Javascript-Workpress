function salerror external error{
    constructor(msg){
        super()
        this.message=msg
        this.name="salerror"
    }
}
VM689:1 Uncaught SyntaxError: Unexpected identifier 'external'
function salerror extends error(){
    constructor(msg){
        super()
        this.message=msg
        this.name="salerror"
    }
}
VM704:1 Uncaught SyntaxError: Unexpected token 'extends'
class salerror extends Error{
    constructor(msg){
        super()
        this.message=msg
        this.name="salerror"
    }
}
undefined
fuction getSal(sal){
    if(sal<0){
        throw new salerror(`salary shouldnt nrgative`)
    }
    console.log(`your salary is :${sal}`)
}
VM965:1 Uncaught SyntaxError: Unexpected identifier 'getSal'
function getSal(sal){
    if(sal<0){
        throw new salerror(`salary shouldnt nrgative`)
    }
    console.log(`your salary is :${sal}`)
}
undefined
sal(-100)
VM1000:1 Uncaught ReferenceError: sal is not defined
    at <anonymous>:1:1
(anonymous) @ VM1000:1
getSal(-100)
VM970:3 Uncaught salerror: salary shouldnt nrgative
    at getSal (<anonymous>:3:15)
    at <anonymous>:1:1
getSal @ VM970:3
(anonymous) @ VM1013:1
function getSal(sal){
    if(sal<0){
        try{
            throw new salerror(`salary shouldnt nrgative`)
        }catch{}
    }
    console.log(`your salary is :${sal}`)
}
undefined
getSal(-100)
VM1043:7 your salary is :-100
undefined
function getSal(sal){
    if(sal<0){
        try{
            throw new salerror(`salary shouldnt nrgative`)
        }catch(e){console.log(e)}
    }
    console.log(`your salary is :${sal}`)
}
//undefined

getSal(-100) 

// VM1120:5 salerror: salary shouldnt nrgative
//     at getSal (<anonymous>:4:19)
//     at <anonymous>:1:1
// VM1120:7 your salary is :-100
// undefined
function getSal(sal){
    if(sal<0){
        try{
            throw new salerror(`salary shouldnt nrgative`)
        }catch(e){console.log(e)}
        sal=0;
    }
    console.log(`your salary is :${sal}`)
}
//undefined
getSal(-100)
VM1182:5 salerror: salary shouldnt nrgative
    at getSal (<anonymous>:4:19)
    at <anonymous>:1:1
VM1182:8 your salary is :0
unde
