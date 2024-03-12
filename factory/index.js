'use strict';

// * Factory pattern

class Fulltime {
  constructor() {
    this.rate = '$12';
  }
}

class Parttime {
  constructor() {
    this.rate = '$11';
  }
}

class Temporary {
  constructor() {
    this.rate = '$10';
  }
}

class Contractor {
  constructor() {
    this.rate = '$15';
  }
}

// * Employee factory:
class Employee {
  create(type) {
    let employee = null;

    if (type === 'fulltime') {
      employee = new Fulltime();
    } else if (type === 'parttime') {
      employee = new Parttime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }

    if (employee) {
      employee.type = type;
      employee.say = function () {
        console.log(`${this.type}: rate ${this.rate}/hour`);
      };
    }

    return employee;
  }
}

const employeeFactory = new Employee();
const fulltime = employeeFactory.create('fulltime');
const parttime = employeeFactory.create('parttime');
const temporary = employeeFactory.create('temporary');
const contractor = employeeFactory.create('contractor');

fulltime?.say(); // fulltime: rate $12/hour
parttime?.say(); // parttime: rate $11/hour
temporary?.say(); // temporary: rate $10/hour
contractor?.say(); // contractor: rate $15/hour
