interface Person {
    age: number;
    name: string;
    add: boolean
  }
  
  type PersonKeys = keyof Person;

  interface User{
      address: PersonKeys
  }

class keyOf implements User{
    address: "add"
}


type Person2 = { age: number; name: string; alive: boolean };

type Age = Person2["age" | "name" | "alive"];
type I2 = Person2[keyof Person2];

type AliveOrName = "alive" | "name" | "age";

type I3 = Person2[AliveOrName];




const userArray = [
{name: "Vinay", age: 29, india: true},
{name: "Aman", age: 28, india: true}
];

type Person3  = typeof userArray[number]["name"];



//Conditinal type

type FirstType = {
    name: string,
   };
   type SecondType = {
       //Code here
   };
   
   type TrueType = "True condition";
   
   type FalseType = "false condition";

   type ResolvedType = FirstType extends SecondType ? TrueType : FalseType;


//Mapped Types

type OptionsFlags<Type> = {
   -readonly [Property in keyof Type] -?: string;
  };
  type KeyOfObject = {
    readonly name?: string;
    readonly age?: number
  };
  
  type FeatureOptions = OptionsFlags<KeyOfObject>;

//Template Literal Types

type World = 'World';
type Hello  = `hello ${World}`;




type OneType = 'First string' | 'First More';
   
type SecType = 'Second String';

type AllLocaleIDs = `${OneType | SecType}_id`;

//Intrinsic String Manipulation Types


type Greeting = "vinay, kaithwas"
type Upper = "";
type ShoutyGreeting = Uppercase<Greeting>;
type ShoutyGreeting1 = Lowercase<Greeting>;


