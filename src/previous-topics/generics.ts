function addObject<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObject = addObject({name: "Vinay"}, {age: 29});
//console.log(mergedObject);

interface lengthy{
    length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1 ){
        descriptionText = 'Got'+ ' '+ element.length +' elements';
    }
    return [element, descriptionText];
}

//console.log(countAndDescribe('Hi there'));


//Generic class
class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
      return [...this.data];
    }
}

const textStorage =  new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu!');
textStorage.removeItem("max!");

//console.log(textStorage.getItems());

const numberStorage =  new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);

console.log(numberStorage.getItems());


