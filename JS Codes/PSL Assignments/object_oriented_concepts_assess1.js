var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
const arr = new Array(input);

class Employee {
  employeeName = 'Sunny';
  dept = 'CSE';
  doj = '24-01-2024';

  displayEmployee() {
    console.log(
      'Name : ' +
        this.employeeName +
        '\nDepartment : ' +
        this.dept +
        '\nDOJ : ' +
        this.doj
    );
  }

  constructor(employeeName, dept, doj) {
    this.employeeName = employeeName;
    this.dept = dept;
    this.doj = doj;
  }
}

let obj = new Employee(arr[0][0], arr[0][1], arr[0][2]);
obj.displayEmployee();
