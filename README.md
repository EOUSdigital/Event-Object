# 📘 Module 08 --- Lesson 04: The Event Object (e)

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Module](https://img.shields.io/badge/Module-08%20Events-blue)
![Lesson](https://img.shields.io/badge/Lesson-04%20Event%20Object-green)
![Level](https://img.shields.io/badge/Level-Beginner-informational)

------------------------------------------------------------------------

## 📌 Overview

This lesson introduces the **Event Object (`e`)**, which provides
detailed information about user interactions.

This lesson: 
- Understand what the event object is 
- Access event data (target, type, position) 
- Handle multiple elements using event delegation 
- Build dynamic behaviour using `dataset`

------------------------------------------------------------------------

## 🧠 Core Concept

When an event occurs, JavaScript automatically creates an **event
object**:

``` javascript
(e)
```

This object contains information about:
- What happened
- Where it happened
- Which element triggered it

------------------------------------------------------------------------

## 🎯 Key Properties

### `e.target`

The element that triggered the event.

``` javascript
button.addEventListener('click', (e) => {
  console.log(e.target);
});
```

------------------------------------------------------------------------

### `e.type`

The type of event.

``` javascript
console.log(e.type);      // "click"
```

------------------------------------------------------------------------

### Mouse Position

``` javascript
document.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
});
```

------------------------------------------------------------------------

## ⚖️ `target` vs `currentTarget`

| Property            | Meaning                         |
| ------------------- |-------------------------------- |
| `e.target`          | Where the event started         |
| `e.currentTarget`   | Where the listener is attached  |

------------------------------------------------------------------------

## 🧩 Event Delegation

Handle multiple elements with one listener.

``` javascript
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
});
```

### Benefits:

-   Less code
-   Better performance
-   Scales easily

------------------------------------------------------------------------

## 🧠 Data Attributes (`dataset`)

Attach custom data to elements:

``` html
<button data-action="delete">Delete</button>
```

Access in JavaScript:

``` javascript
const action = e.target.dataset.action;
```

------------------------------------------------------------------------

## 🔥 Dynamic Behaviour Example

``` javascript
container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  const action = e.target.dataset.action;

  if (action === 'like') {
    console.log('Liked!');
  } else if (action === 'delete') {
    console.log('Deleted!');
  }
});
```

------------------------------------------------------------------------

## 🧪 Exercises Completed

### ✅ Click Info Display

-   Display element text and event type

### ✅ Event Delegation

-   Handle multiple buttons with one listener

### ✅ Data-Driven Actions

-   Use `dataset` to control behaviour dynamically

------------------------------------------------------------------------

## 🧩 Mini Project: Action Panel

### Features:

-   Multiple buttons with different actions
-   One event listener
-   Dynamic UI updates
-   Optional visual feedback

------------------------------------------------------------------------

## ⚠️ Common Mistakes

-   Forgetting `(e)` parameter
-   Using `element` instead of `e.target`
-   Not filtering elements (e.g. missing `tagName` check)
-   Confusing `target` and `currentTarget`
-   Mismanaging state (values changing unexpectedly)

------------------------------------------------------------------------

## ✅ Best Practices

-   Use event delegation for multiple elements
-   Keep event responsibilities clear
-   Use `dataset` for scalable logic
-   Avoid unnecessary multiple listeners

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   The event object provides context for interactions
-   `e.target` tells you what was clicked
-   Event delegation simplifies handling multiple elements
-   `dataset` enables dynamic and scalable behaviour


------------------------------------------------------------------------

## 💬 Final Note

Mastering the event object allows you to move from: 
- Static interactions\
  ➡️
- Dynamic, data-driven behaviour

This is a core skill in modern frontend development.
