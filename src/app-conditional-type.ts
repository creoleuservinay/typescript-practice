interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  
  interface RegExp extends Animal{
    
  }
  
  type Example1 = Dog extends Animal ? number : string;
  
  type Example2 = RegExp extends Animal ? number : string;