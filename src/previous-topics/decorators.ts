function Logger(printingString: string){
    return function( constructor:  Function ){
        console.log(printingString);
        console.log(constructor);
    }
}

function withTemplate(template: string, hookid: string){
    return function(constructor: any){
        const hookEl = document.getElementById(hookid);
        const p = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('p')!.textContent = p.name;
        }
        
    }
}
@withTemplate('<p>My name is vinay</p>', 'divid')
@Logger("Hi There")
class PersonCls{
    name = "Max";
    constructor(){
        console.log('Hi i am constructor!');
    }
}
const pers = new PersonCls();
console.log( pers );


function Log(target: any, propertName: string | symbol){
    console.log('Property decorator!');
    console.log(target, propertName);
}
class Product{
    @Log
    title: string;
    private _price: number;


    set price(val: number){
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Enter Valide Price');   
        }
    }

    constructor(t: string, p:number){
        this.title = t;
        this._price = p;
    }

    getPriceWithTeax(tax: number){
        return  this.price * (1 + tax);
    }

}