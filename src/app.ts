interface Person {
    age: number;
    name: string;
    add: boolean
  }
  
  type PersonKeys = keyof Person; // "age" | "name"


  interface User{
      address: PersonKeys
  }

class CheckKeyOf implements User{
    address: "add"
}


type Person2 = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I2 = Person[keyof Person];