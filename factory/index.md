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

Depending on the type we create here different class instances, hiding from the user what class we are using to create an instance. In the end we get an object with the fields we need and `say` method.

Let's create missing classes:

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

Factory pattern should be used when object creation logic in the constructor is of high complexity. Most often this happens when object can be created from several sources.

It is also useful when you need to create many objects with the same fields.

> [!CAUTION]
> At the same time, factory pattern can bring over complexity to the app if used unnecessarily.

## Summing-up

Factory pattern allows to create objects hiding implementation details from the user. It is useful when object creation logic in the constructor is of high complexity (e.g. objects are created from several sources) or we need to create many objects of with the same fields.
