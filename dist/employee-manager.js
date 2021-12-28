"use strict";
class EmployeeManager {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        //Code
    }
    employeeListComponand(name) {
        let html = '';
        return '';
    }
    clearInput() {
        const employeeInp = document.getElementById('name');
        if (employeeInp) {
            employeeInp.value = '';
        }
    }
    addNewEmployee(employee) {
        if (this.employees.indexOf(employee) > -1) {
            this.clearInput();
            throw new Error('Employee already exists.');
        }
        else {
            console.log('Here else');
            this.employees.push(employee);
            console.log(this.employees);
        }
        this.clearInput();
    }
    printEmployessInformation() {
        return this.employees;
    }
    getBasicDetailAboutClass() {
        return 'This is Main Department Class';
    }
    addEmployeeFromUi() {
        const addEmployeeBtn = document.getElementById('addemployee');
        if (addEmployeeBtn) {
        }
        addEmployeeBtn.addEventListener('click', () => {
            const employeeName = document.getElementById('name');
            if (employeeName.value && employeeName.value.length > 3) {
                this.addNewEmployee(employeeName.value);
                console.log(this.employees);
                this.RenderEmployess();
            }
        });
    }
    RenderEmployess() {
        const listEl = document.getElementById('employees-list');
        listEl.innerHTML = '';
        const employeeListEle = document.getElementById('employees-list');
        if (this.employees.length > 0) {
            for (const prjItem of this.employees) {
                const p = document.createElement("p");
                p.innerText = prjItem;
                employeeListEle.appendChild(p);
            }
        }
        else {
            const norecordp = document.createElement("p");
            norecordp.innerText = 'No record found.';
            employeeListEle.appendChild(norecordp);
        }
    }
}
EmployeeManager.year = 2020;
const newCsDeparment = new EmployeeManager("D1", "CS!");
newCsDeparment.addEmployeeFromUi();
newCsDeparment.RenderEmployess();
