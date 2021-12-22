class Department {
    static year = 2020;
    protected employees: string[] = [];
    constructor(private readonly id: string, public name: string, ){
        //Code
    }

    static createEmployee(name: string){
        return {name: name};
    }
    
    describe(){
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployessInformation(){
        return this.employees;
    }

    getBasicAboutClass(){
       return 'This is Main Department Class';
    }
}

class ItDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
    
    getBasicAboutClass(){
        return 'This is It Department Class';
    }
}

class AccountDepartment extends Department{
    sectionId: string;
    private lastReport:string;

    constructor(id: string, sectionid: string, private reports: string[]){
        super(id, "Accounts");
        this.sectionId = sectionid;
        this.lastReport = reports[0];
    }

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('There is no report');
    }

    set mostRecentReport(reportTitle: string){
        if(!reportTitle){
            throw new Error('Please enter report title');
        }
        this.addReport(reportTitle);
    }

    getBasicAboutClass(){
       return 'This is Account Deparment Classs '+ 'Where ' + super.getBasicAboutClass();
    }

    addEmployee(employee: string){
        if(employee == "Aman") {
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string){
        if(!text){
            throw new Error('Please enter report');
        }
        this.reports.push(text);
        this.lastReport = text;
    }
}

class addNewEmployeeFromUi extends Department{
    constructor(id: string){
        super(id, 'IT');
        const addEmployeeBtn = document.getElementById('addemployee') as HTMLButtonElement;
        addEmployeeBtn.addEventListener('click', () => {
            const employeeName = document.getElementById('name') as HTMLInputElement;
            if(employeeName.value){
                this.employees.push(employeeName.value);
                //console.log(this.employees);
            }
        });
    }
}

const employee1 = Department.createEmployee('Vinay!');
//console.log(employee1, 'here');


const itDepartment = new ItDepartment('D1', []);
itDepartment.addEmployee("Vinay");
itDepartment.addEmployee("Aman");
//console.log(itDepartment);

const acDepartment = new AccountDepartment('D2', 'Ac001', []);
acDepartment.addEmployee("A-Vinay");
acDepartment.addEmployee("A-Aman");

acDepartment.mostRecentReport = 'New report';
console.log(acDepartment.mostRecentReport);

//console.log(acDepartment);
// const addEmployeeBtn = document.getElementById('addemployee') as HTMLButtonElement;
//     addEmployeeBtn.addEventListener('click', () => {
//         console.log('Hello my click working!'); 
//     });

new addNewEmployeeFromUi('ID001');

