'use strict';


class Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeType = employeeType;
		this.yearsEmployed = yearsEmployed;
		this.minimumWage = 18000;
		this.totalSalary = 0;
	}
		Salary(){
		this.totalSalary = this.minimumWage * this.level
		if(this.bonus !== 0){
			this.totalSalary = this.totalSalary + this.bonus;
			return this.totalSalary;
		}
			return this.totalSalary;
	}
}

class Intern extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 2;
		if(yearsEmployed > 0){
			this.bonus = 500 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

}

class Associate extends Employee{
	constructor(firstName,lastName, employeeType, yearsEmployed){
		super(firstName,lastName,employeeType,yearsEmployed);
		this.level = 3;
		if(yearsEmployed > 0){
			this.bonus = 1000 * yearsEmployed;
		}else{
			this.bonus = 0;
		}
	}

}

class Manager extends Employee{

  constructor(firstName, lastName,employeeType,yearsEmployed){
  		super(firstName,lastName,employeeType,yearsEmployed);
    	this.level = 4;
    	if (yearsEmployed > 0){
    		this.bonus = 1500 * yearsEmployed;
  		}else{
    		this.bonus = 0;
  		}
    }

}

class Executive extends Employee{
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
    this.level = 5;
  	if (yearsEmployed > 0){
    	this.bonus = 2000 * yearsEmployed;
  	}else{
    	this.bonus = 0;
  	}
  }
}

class  Director extends Employee{
  constructor(firstName, lastName,employeeType,yearsEmployed){
    super(firstName,lastName,employeeType,yearsEmployed);
    this.level = 6;
  	if (yearsEmployed > 0){
    	this.bonus = 2500 * yearsEmployed;
  	}else{
    	this.bonus = 0;
  	}
  }
}

let subBtn;

window.addEventListener('load', function() {
subBtn = document.getElementById('getSalaryBtn');
let employeeClass;
subBtn.addEventListener('click', (e)=>{
	let fName = document.getElementById('fName').value;
	let lName = document.getElementById('lName').value;
	let eType = document.getElementById('eType').value;
	let nYears = document.getElementById('nYears').value;

	if(fName == '' || fName == ' '){
		alert('Input a valid first name');
		return;
	}
	if(lName == '' || lName == ' '){
		alert('Input a valid last name')
		return;
	}
	if(eType == 'select'){
		alert('Please select an employee type');
		return;
	}
	if(nYears == 'select'){
		alert('Please select the number of years employed');
		return;
	}
	switch(eType){
		case 'Intern' :
			employeeClass = new Intern(fName,lName,eType, nYears).Salary();
			break;
		case 'Associate' :
			employeeClass = new Associate(fName,lName,eType, nYears).Salary();
			break;
		case 'Manager' :
			employeeClass = new Manager(fName,lName,eType, nYears).Salary();
			break;
		case 'Executive' :
			employeeClass = new Executive(fName,lName,eType, nYears).Salary();
			break;
		case 'Director' :
			employeeClass = new Director(fName,lName,eType, nYears).Salary();
			break;

	}
	//Set Values into html
	document.getElementById('fnd').innerText = fName;
	document.getElementById('lnd').innerText = lName;
	document.getElementById('ety').innerText = eType;
	document.getElementById('salaryOutput').innerText = employeeClass;

});
});

module.exports = {
  Manager: Manager,
  Executive: Executive,
  Director: Director,
  Intern: Intern,
  Associate: Associate
}