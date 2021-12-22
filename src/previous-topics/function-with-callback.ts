function greeter(fn: (a: string) => void){
    fn('Hello into the fun');
}

function printToConsole(s: string){
    console.log(s);
}

const button = document.querySelector('button')!;
    button.addEventListener('click', () => {
        greeter(printToConsole);
    });
        


