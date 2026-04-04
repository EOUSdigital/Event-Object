"use strict";

//Title 🟧 Module 8 - Events: Lesson 04. Event Object

//* 🧠 ✅ Recap: The Event Object (e)

//  We will keep this clear, practical, and structured so it sticks.

//? 1️⃣ What is the Event Object?

//  👉 When an event happens, JavaScript gives you an object:

(e)

//  👉 It contains everything about the event

//# 💡 Core Idea
//  “The event happened → e tells us what, where, and how”

//? 2️⃣ The Most Important Properties

//! 🎯 e.target

//  👉 The exact element that triggered the event

threeButtons.addEventListener('click', (e) => {
    console.log(e.target);
});

//  📍 e.type
//  👉 The type of event
console.log(e.type);        //  click

//* 🖱️ Mouse Position

document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
});

//? 3️⃣ target vs currentTarget (CRITICAL)

//  | Property          | Meaning                        |
//  | ----------------- | ------------------------------ |
//  | `e.target`        | Where the event **started**    |
//  | `e.currentTarget` | Where the listener is attached |

//* 🧠 Example

//  Click a <span> inside a <button>:
//  👉 e.target         → <span>
//  👉 e.currentTarget  → <button></button>

//? 4️⃣ Event Delegation (Major Concept)

//  👉 One listener handles many elements

CSSContainerRule.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});

//# 💡 Why it matters
//  • Less code
//  • More scalable
//  • Works with dynamic elements

//? 5️⃣ Using dataset (Real Power)

//  👉 Add data in HTML:

<button data-action="delete">Delete</button>

//  👉 Access in JS:

const action = e.target.dataset.action;

//* 🎯 Control behavior dynamically

if (action === 'delete') {
    //  do something
}

//? 6️⃣ Key Mental Model (This is the BIG one)

//  Event happens
//      ↓
//  Listener catches it
//      ↓
//  e.target tells us WHAT triggered it
//      ↓
//  We decide WHAT TO DO

//! ⚠️ Common Mistakes (You’ve Already Faced These)
//  • Forgetting (e)
//  • Using displayBtn instead of e.target
//  • Not filtering elements (tagName)
//  • Mixing responsibilities between events
//  • State issues (values changing unexpectedly)

//? 🧠 Final Summary

//  👉 You now understand:
//  • What an event object is
//  • How to access event data
//  • How events flow
//  • How to handle multiple elements
//  • How to control behavior dynamically

//# 🤔 Final Reflection (Quick Check)

//  Answer this mentally:
//  If you click a <span> inside a button:
//  • What is e.target?
//  Answer: The "e.target" is the <span> you actually clicked. It is the deepest element that triggered the event. I will use "e.target" when I want the exact element the user clicked.

//  • What is e.currentTarget?
//  Answer: The "e.currentTarget" is the element the listener is attached to, so in this case it would be the <button> if the handler is on the button, or the parent container if the handler is on the parent. I will use "e.currentTarget" when I want the element that owns the event listener, especially in event delegation.

