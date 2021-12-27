"use strict";
// @errors: 2339
// @experimentalDecorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function updateShipType(constructor) {
    console.log(constructor.name);
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.shiptype = 'Local';
        }
    };
}
function updateShippingPrice() {
    return function (target, propertyKey) {
        console.log(target);
        let value;
        Object.defineProperty(target, propertyKey, {
            get: () => {
                return value;
            },
            set: (v) => {
                value = v;
                console.log('Setter');
            }
        });
    };
}
//@updateShipType
class productCheckOut {
    constructor(st, p) {
        this.shiptype = st;
        this.shippingPrice = p;
    }
}
__decorate([
    updateShippingPrice()
], productCheckOut.prototype, "shippingPrice", void 0);
const newOrder = new productCheckOut('International', 0);
console.log(newOrder.shippingPrice); // Prints "report"
