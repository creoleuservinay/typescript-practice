// @errors: 2339
// @experimentalDecorators

function updateShipType<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(constructor.name);
    return class extends constructor {
        shiptype = 'Local';
    };
}

@updateShipType
class productCheckOut{
     shiptype: string; //Local, International

    constructor(st: string){
        this.shiptype = st;
    }
}

const newOrder = new productCheckOut('International');
console.log(newOrder); // Prints "report"
