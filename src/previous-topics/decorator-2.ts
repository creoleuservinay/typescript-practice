function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true, //This property we can override from prototype.
      enumerable: false, //This property we can override from prototype.
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }
  
  class Printer {
    message = 'This works!';
  
    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }

  const p = new Printer();
  const button = document.getElementById('creole-button')!;
  button.addEventListener('click', p.showMessage);