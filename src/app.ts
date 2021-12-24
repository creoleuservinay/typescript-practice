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
type Age = Person["age"];

type I2 = Person[keyof Person];