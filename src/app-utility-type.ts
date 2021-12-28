/**
 * Utility Types Demo.
 */
interface Props {
    title?: string,
    description?: string
}

//Required
const obj: Required<Props> = {
    title: "Indore",
    description: "Description"
}


//Partial
const obj2: Partial<Props> = {
    description: "Required title"
}

//Readonly
const obj3: Readonly<Props> = {
    title: "Read only title"
}


//Record Type
interface AllowShipping {
    type: string;
    price: number;
}


type allowedArea = "India" | "Singapore";

const knowShipAvailability: Record<allowedArea, AllowShipping> = {
    "India": { type: "Local", price: 50 },
    "Singapore": { type: "International", price: 1000 }
}


//Pick type.
interface InstitutePortFolio{
    name:string;
    bus: boolean;
    library: boolean;
    totalBranch: number;
}

type PickToFill = Pick<InstitutePortFolio, "name" | "totalBranch">; 

const fillInstituteDetails: PickToFill = {
    name: "SGITS",
    totalBranch: 5,
}

//Omit
type PickAfterOmit = Omit<InstitutePortFolio, "name" | "totalBranch">; 

const fillInstituteDetailsAfterOmit: PickAfterOmit = {
    bus: true,
    library: true,
}

//Exclude
type EntryAllowOnes = Exclude<"Ashish", "vinay" | "aman">; //Aman excluded as repeating into union.

const CheckExclude: EntryAllowOnes = "Ashish";

type excludeFunction = Exclude<string | number | (() => void), Function>;

//Extract
type allMergedType = number | boolean;
type ExtractedType = Extract<allMergedType, string | number | boolean>;

//nonNullable
type T0 = NonNullable<string | number | null>;

//Parameters

declare function ParameterTypeCheck(arg: {s: string, a: number}): void;

type PT0 = Parameters<typeof ParameterTypeCheck>;


//ReturnType
type RT0 = ReturnType<() => string>;

//Instance type
class C {
    x = 0;
    y = 0;
  }
   
type IT0 = InstanceType<typeof C>;
       
//Symbol Type
let asym2 = Symbol("key");
let asym3 = Symbol("key");

let sym1 = Symbol.for("RegEx");
let sym2 = Symbol.for("RegEx");

if(sym1 === sym2){
    console.log('if', Symbol.keyFor(sym1)); 
} else {
    console.log('else');
}

//Unique symbol? a subtype of symbol
const usym2:   unique symbol = Symbol();

//Symbol as function
const getData = Symbol("Other data");
console.log(getData.toString());

class Demo {
    [getData]() {
        return 'Some Data From function';
    }
}



let checkSymbol = new Demo();

// console.log(checkSymbol[getData]());

console.log(Symbol.hasInstance);




