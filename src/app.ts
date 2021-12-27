// @errors: 2339
// @experimentalDecorators

function updateShipType<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(constructor.name);
    return class extends constructor {
        shiptype = 'Local';
    };
}

function updateShippingPrice()
{
    return function(target: object, propertyKey: string) {
            console.log(target);
            let value: number;
            Object.defineProperty(target, propertyKey, { 

            get: () => {
                        return value;
                    },

            set: (v: number) => {

                    value = v;
                    console.log('Setter');
            }
        });
    }
}
  

//@updateShipType
class productCheckOut{
    @updateShippingPrice()
    shippingPrice: number;

    shiptype: string; //Local, International

    constructor(st: string, p: number){
        this.shiptype = st;
        this.shippingPrice = p;
    }
}

const newOrder = new productCheckOut('International', 0);
console.log(newOrder.shippingPrice); // Prints "report"
