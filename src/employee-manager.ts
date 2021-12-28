class EmployeeManager {
    static year = 2020;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string, ){
        //Code
    }
    

    employeeListComponand(name: string){
        let html = '';
        
        return '';
    }

    clearInput(){
        const employeeInp = document.getElementById('name') as HTMLInputElement;
        if(employeeInp){
            employeeInp.value = '';
        }
    }
    
    addNewEmployee(employee:string){
        if( this.employees.indexOf(employee) > -1 ){
            this.clearInput();
           throw new Error('Employee already exists.');
        } else {
            console.log('Here else');
            this.employees.push(employee);
            console.log(this.employees);
        }
        this.clearInput();
    }

    printEmployessInformation(){
        return this.employees;
    }

    getBasicDetailAboutClass(){
       return 'This is Main Department Class';
    }

    addEmployeeFromUi(){
        const addEmployeeBtn = document.getElementById('addemployee')! as HTMLButtonElement;
        if(addEmployeeBtn){
            
        }
        addEmployeeBtn.addEventListener('click', () => {
            const employeeName = document.getElementById('name') as HTMLInputElement;
            if(employeeName.value && employeeName.value.length > 3){
                this.addNewEmployee(employeeName.value);
                console.log(this.employees);
                this.RenderEmployess();
            }
        });
    }

    RenderEmployess(){
        const listEl = document.getElementById('employees-list'
          )! as HTMLUListElement;
          listEl.innerHTML = '';
          const employeeListEle = document.getElementById('employees-list')! as HTMLDivElement;
          if( this.employees.length > 0 ){
            for (const prjItem of this.employees) {
                const p = document.createElement("p");
                p.innerText = prjItem;
                employeeListEle.appendChild(p);
            }   
          } else {
            const norecordp = document.createElement("p");
            norecordp.innerText = 'No record found.';
            employeeListEle.appendChild(norecordp);
          }
    }
}

const newCsDeparment  = new EmployeeManager("D1", "CS!");
newCsDeparment.addEmployeeFromUi();
newCsDeparment.RenderEmployess();