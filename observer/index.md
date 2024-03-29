# Observer Pattern

[Observer pattern](https://monsterlessons.com/project/lessons/observer-pattern-v-javascript) is quite similar to [Pub/Sub](../pubSub/index.md), but its idea is a little different.

A common problem during development that we face is when different parts of application have to respond to various events. E.g. the user has entered some text and we need to change some components. And all this is quite difficult to synchronize.

Observer pattern can help us with this. It allows to create _one-to-many relation_ between components.

> [!NOTE]
> To run custom example open `./index.html` in the browser.
