# Factory Pattern

[Factory pattern](https://monsterlessons.com/project/lessons/factory-pattern-v-javascript) allows to create objects hiding implementation details from the user.

Let's create `Employee` factory with `create` method:

```js
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
```

Here we create by type different class instances, hiding from the user what class we are using to create an instance. In the end we get an object with required fields and `say` method.

Now we need to create missing classes:

```js
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
```

These classes have only rate per hour in the constructor.

Now we can call our factory:

```js
const employeeFactory = new Employee();
const fulltime = employeeFactory.create('fulltime');
const parttime = employeeFactory.create('parttime');
const temporary = employeeFactory.create('temporary');
const contractor = employeeFactory.create('contractor');

fulltime?.say(); // fulltime: rate $12/hour
parttime?.say(); // parttime: rate $11/hour
temporary?.say(); // temporary: rate $10/hour
contractor?.say(); // contractor: rate $15/hour
```

**When to use Factory pattern**

Factory pattern should be used when object creation logic in the constructor is very complex. Most often when object can be created from several sources.

It is also useful when you need to create many objects of the same type.

> At the same time, factory pattern can bring over complexity to the app if you use it unnecessarily.
