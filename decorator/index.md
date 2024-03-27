# Decorator Pattern

Like [mixin](../mixins/index.md), [decorator pattern](https://monsterlessons.com/project/lessons/decorator-pattern-v-javascript) is an alternative to class inheritance.

Decorator allows to dynamically add new properties and methods to objects. That is, we kind of wrap our object in a decorator, like in a superclass.

A common example when we benefit from using decorators is if we need a huge number of subclasses for our system.

Let's say we have a base class `Coffee`. And we want to create a child classes: `Espresso`, `Latte`, `Cappuccino`. If we want to make each of them with sugar, we need to create a class `EspressoWithSugar`, which inherits from `Espresso`; `LatteWithSugar` that inherits from `Latte` and so on. Finally we'll end up with a huge number of child classes.

A decorator can solve this problem for us.
