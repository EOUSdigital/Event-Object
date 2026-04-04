"use strict";

//Title 🟧 Module 8 - Events: Lesson 04. Event Object

//? 🔍 Concept Explanation

//  When an event happens (like a click), JavaScript automatically creates an object:
//  👉 This object contains details about the event.

//* We usually call it: (e)

//#  💡 Think of it like this:
//  “The event happened… and "e" tells us everything about it”.

//? 💻 First Example

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    console.log(e);
});

//? 🔍 What happens here?

button.addEventListener('click', (e) => {'Some code or text.'});

//  👉 e is automatically passed in
//  👉 It represents the click event

console.log(e);

//  👉 Open DevTools → you’ll see a big object with data

//? 🧠 Key Properties You MUST Know

//  We will focus on the most useful ones first.

//* 1. 🎯 e.target

//  👉 The element that triggered the event

button.addEventListener('click', (e) => {
    console.log(e.target);
});

//  🧠 Why it matters:
//  • You know what was clicked
//  • Essential for dynamic apps

//* 2. 📍 Mouse Position

document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
});

//  👉 Gives mouse position in the viewport

//* 3. 🧱 e.type

button.addEventListener('click', (e) => {
    console.log(e.type);
});

//  👉 Outputs: "click"

//* 4. 🛑 e.preventDefault() (preview)

//  👉 Stops default browser behavior (we will use this later)


//? 🔥 Let’s Connect It to YOUR Project

//  You already have your reaction button.
//  Now upgrade it.

//* 🧩 Task 1: Log What Was Clicked

reactionBtn.addEventListener('click', (e) => {
    console.log(e.target);
});

//  👉 Click your button → inspect output

//* 🧩 Task 2: Show Clicked Element Text

reactionBtn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});

//* 🧩 Task 3: Track Mouse Position

document.addEventListener('mousemove', (e) => {
    console.log(`X:${e.clientX}, Y: ${e.clientY}`);
});

//# ⚠️ Common Beginner Mistakes
//  ❌ Forgetting to include (e)
//  ❌ Thinking (e) is something you define manually
//  ❌ Not exploring the object in DevTools

//? 🧠 Why This Is Powerful

//  Before:

button.addEventListener('click', () => {
    //  something happened
});

//  Now:

button.addEventListener('click', (e) => {
    //  WHAT happened, WHERE, and TO WHAT
});

//? 🧩 Guided Practice (Mini Task)

//* 🎯 Build: Click Info Display

//  When clicking your button:
//  • Show:
//      • Element text
//      • Event type

//  Example output:
//  • Clicked: React
//  • Event: click

//# 🤔 Reflection

//  Why do you think "e.target" is more useful than directly using reactionBtn?
//  Answer: 

//? 🚀 Encouragement

//  This is a big moment.
//  You have moved from:
//  • “Something happened”
//  ➡️ to
//  • “I know exactly what happened, where, and why”

//! Feedback

//TODO  Let’s go through it carefully and sharpen your understanding.

const displayBtn = document.getElementById('displayBtn');
const elementText = document.getElementById('elementText');

displayBtn.addEventListener('click', (e) => {
    elementText.textContent = 'Hello World!';
    e.target.textContent = `${e.type}`;
});

//* 🧠 What You Did Well

displayBtn.addEventListener('click', (e) => {'Some code or text.'});

//  ✔️ Correctly using (e)
//  ✔️ You understand that the event object is passed automatically

e.target.textContent = `${e.type}`;

//  ✔️ This is excellent usage

//  👉 You are:
//  • Accessing the clicked element (e.target)
//  • Changing its content
//  • Using e.type dynamically
//  This shows real understanding 👏

//! ⚠️ The Issue (Important)

elementText.textContent = 'Hello World!';

//  👉 This does not match the goal of the task.

//* 🎯 The Task Was:

//  Show:
//  • Element text
//  • Event type

//* ❌ Current Behavior:
//  • Paragraph     → always shows "Hello World!"
//  • Button        → shows "click"
//  👉 You are not using the event data fully.

//* ✅ Correct Version (What We Want)

displayBtn.addEventListener('click', (e) => {
    elementText.textContent = `Clicked: ${e.target.textContent}`;
    e.target.textContent = e.type;
});

//* 🔍 What this does
//  1. Before changing the button:
//      • It reads its original text (Click)
//  2. Displays it in the paragraph
//  3. Then changes the button text to "click"

//* 🧠 Important Subtle Detail

//  Order matters here:

elementText.textContent = `Clicked: ${e.target.textContent}`;

//  👉 Must come before:

e.target.textContent = e.type;

//  Otherwise:
//  • You will display "click" instead of "Click".

//# 🧩 Even Better Version (Cleaner UX)

displayBtn.addEventListener('click', (e) => {
    const originalText = e.target.textContent;
    elementText.textContent = `Clicked: ${originalText} | Event: ${e.type}`;
    e.target.textContent = 'Clicked!';
});

//  👉 Now:
//  • Paragraph shows full info
//  • Button gives feedback

//# 🤔 Reflection (This is key)

//  Why is this more flexible:  "e.target"
//  instead of: "displayBtn"
//  👉 Think: what happens if you have multiple buttons?

//  Answer: The "e.target" is more flexible because it refers to the actual element that was clicked, not just the element was attached the listener to. That makes it especially useful when one handler needs to work for many child elements or when the clicked element may vary. If we use "displayBtn", we are referring to one specific variable that points to one specific element. That works fine only when is already know exactly which button we want to use. With "e.target", the same handler can react to whichever element triggered the event, which is useful for event delegation and for handling dynamic content. For example, one parent click listener can detect which child button was clicked without adding separate listeners to every button. The "e.target" is the element that actually received the event, while "e.currentTarget" is the element that the listener was attached to. If we want the exact button clicked, use "e.target"; if We want the element whose listener is running, we will use "e.currentTarget".

//! Feedback

//TODO  The "Correct Version" has a bug. When I click a second time, the text message gets replaced with new text provided by the code. The first message that replaces ‘When clicking your button show: Element text or Event type’ is ‘Clicked: Button | Event: click,’ and the second message is ‘Clicked: Clicked! | Event: click.’

//? 🧠 Why This Bug Happens

//  Let’s walk through it step by step.

//# 👉 First Click

const originalText = e.target.textContent;

//  ✔️ Correct — button says "Click"

//  Then:

e.target.textContent = 'Clicked!';

//  👉 Button is now "Clicked!"

//# 👉 Second Click

//  Now this runs again:

const originalText2 = e.target.textContent;

//! 🚨 Problem:
//  • The “original” text is no longer original
//  • It is already been changed

//* 🎯 Root Cause

//  • You are reading a value that you already modified
//  This is a "state problem" — very common in JavaScript.

//* ✅ Proper Fix (Correct Approach)

//  We need to store the original text once, outside the event.

//  ✔️ Fixed Version can be found in script.js

//? 🧠 Why This Works

const originalBtnText = displayBtn.textContent;

//  👉 Stored once when the page loads
//  👉 Never changes
//  👉 Always reliable

//? 🔥 Key Developer Insight

//  You just discovered something important:
//  • State must be controlled, not guessed

//! ❌ Wrong pattern

const originalText3 = e.target.textContent;

//  👉 Depends on changing data → unreliable

//* ✅ Correct pattern

const originalText4 = storedValue;

//  👉 Stable → predictable behavior

//# 🤔 Reflection (Very Important)

//  If you had "5 buttons", each with different text…
//  Would storing one originalBtnText still work?
//  👉 Think about how you would solve that.
//  Answer: No, the original text will be changed after the first click, and becomes the second text, and so on up to the last text available in the code.

//! Feedback

//TODO  This is a really important reflection — and you’re partly right, but there’s a key misunderstanding we need to fix 👇.

//? 🧠 Assessment of Your Answer

//  Your answer:
//  • “No, the original text will be changed after the first click…”

//* ✅ What you got right
//  ✔️ You correctly identified a state problem
//  ✔️ You understand that values can change over time
//  ✔️ You are thinking about multiple interactions (this is good)

//! ❗ Where the Understanding Needs Adjustment

//  The question was actually about something slightly different:
//  👉 “What happens if we have multiple buttons, not multiple clicks?”

//? 🧠 The Real Issue

//  If you do this:

const originalBtnText2 = displayBtn.textContent;

//  👉 This only stores ONE button’s text

//! ❌ Problem with 5 buttons

//  If you have:

```HTML
<button>Save</button>
<button>Delete</button>
<button>Edit</button>
<button>Cancel</button>
<button>Submit</button>
```

//  👉 Which one does originalBtnText store?
//  💥 Only one — not all five

//* 🎯 Correct Understanding

//  The problem is NOT that the text changes over time
//  The problem is that you only stored one value for multiple elements

//* ✅ Better Answer (What You’re Aiming For)

//  A stronger answer would be:
//  ❌ No, it wouldn’t work because each button has its own text, and storing a single originalBtnText would not correctly represent all buttons.

//* 🧠 Even Better Thinking (Advanced Insight)

//  👉 Each button needs its own source of truth
//  That leads to better solutions like:
//  • Using e.target.textContent
//  • OR storing data per element

//? 📊 Updated Assessment
//  • Understanding of state → 7.5/10
//  • Understanding of multiple elements → 6.5/10
//  • Overall reasoning → Good, but slightly off target

//  👉 You are close — just need to shift focus from:
//  • “time changes”
//  ➡️ to
//  • “multiple elements need separate data”

//TODO 🔥 Now Let’s Level Up

//* 🧩 Handling Multiple Elements with e.target
//  This is where things get powerful.

//? 🧠 Concept

//  Instead of writing:

button1.addEventListener();
button2.addEventListener();
button3.addEventListener();

//  👉 We can handle all buttons with ONE listener

//? 💻 Example

//  • HTML can be found in index.html
//  • JavaScript can be found in script.js

//? 🔍 What happens?
//  • Click any button
//  • e.target = the exact button clicked
//  👉 No need to select each button individually
//  Answer: Once a button is clicked will log the button name in the console developer.

//! Feedback

//* ✅ What You Got Right
//  ✔️ You understand that:
//  • Clicking a button triggers the event
//  • Something gets logged to the console
//  • It relates to the button that was clicked
//  👉 That’s the basic behavior — good foundation

//* ❗ What’s Missing (Important)
//  Your answer describes what happens, but not why it works

//* 🧠 The Key Concept You Need to Say
//  "e.target" refers to the exact element that triggered the event

//* 🎯 Stronger Answer (What You’re Aiming For)
//  A more complete answer would be:
//  ✔️ When any button inside the container is clicked, e.target refers to the specific button that was clicked, so we can access its text and log it without selecting each button individually.

//* 🔍 Why This Matters
//  Right now your thinking is:
//  👉 “Click → logs button name”
//  But we want:
//  👉 “Click → event bubbles → container catches it → e.target tells us which button triggered it”

//* 🧠 Missing Piece: Event Flow (Simple Version)
//  Button clicked
//      ↓
//  Event bubbles up
//      ↓
//  Container hears it
//      ↓
//  e.target = original button
//  👉 That’s the real power here

//* 📊 Assessment
//  • Understanding of outcome → 7/10
//  • Understanding of mechanism → 6/10
//  • Overall → Good, but needs deeper reasoning

//# 🤔 Quick Reflection

//  If you click empty space inside the container, what will "e.target" be?
//  Answer: If I click empty space inside the container, "e.target" will be the container itself only if the click lands on the container element; otherwise it will be the deepest element actually clicked inside it. If the space is truly empty and the container has no child there, "e.target" is usually the container element. In event delegation terms, "e.target" is the specific element that received the click, while e.currentTarget is the element the handler is attached to. So if the container handles the event and you click on blank space within it, "e.target" is typically the container.

//! Feedback

//* 🧠 What You Did Exceptionally Well

//  ✅ 1. You Distinguished Between target and currentTarget
//  This is huge.

e.target        // where the event originated
e.currentTarget // where the listener is attached

//  👉 Many beginners do not understand this at all

//  ✅ 2. You Understood “Deepest Element”
//  • “deepest element actually clicked”

//  👉 This shows you understand:
//  • DOM structure
//  • Event propagation (even if not named explicitly)

//  ✅ 3. You Thought About Real Scenarios
//  • Empty space
//  • Child elements
//  • Container
//  👉 That’s exactly how developers reason

//  📊 Assessment
//  • Conceptual understanding → 9/10
//  • Precision → 8.5/10
//  • Developer-level thinking → Yes
//  👉 This is a clear improvement from earlier answers

//? 🧠 Why This Is Powerful

//  This is called:
//  👉 Event Delegation

//  Benefits:
//  • Less code
//  • More flexible
//  • Works for dynamic elements

//! ⚠️ Important Detail
//  If you click the container (not a button):

e.target();

//? ✅ Safer Version

handling.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});

//? 🧩 Your Next Task

//  🎯 Build This:
//  • A container with 3–5 buttons
//  • One event listener on the container
//  • When clicking a button:
//      • Display its text in a paragraph

//# 🤔 Reflection

//  Why is this better than adding 5 separate event listeners?
//  Answer: Creating one event listener on the container will help us to reduce unnecessary code because what we create will have the same functionality like 5 separate event listeners. With less code the effort to maintain it and potential for errors is reduced.

//! Feedback

//* 🧠 What You Did Well

//  ✅ 1. Correct Structure (Very Important)

const threeButtons = document.getElementById('threeButtons');
threeButtons.addEventListener('click', (e) => {'Some code or text.'});

//  ✔️ You used a parent container
//  ✔️ You added one event listener
//  ✔️ You’re relying on e.target
//  👉 This is event delegation — correctly applied

//  ⚠️ 2. The Problem (Important)

e.target.textContent = 'Clicked!'

//  👉 This runs no matter what is clicked

//* 💥 What can go wrong?
//  If you click:
//  • A <p> → text becomes "Clicked!" ❌
//  • The <h2> → text becomes "Clicked!" ❌
//  👉 Not just buttons — everything inside the container changes

//* 🎯 What You Need to Fix
//  You must ensure:
//  👉 Only buttons are affected

//* ✅ Correct Version -> script.js

//* 🔍 Why This Works

if (e.target.tagName === 'BUTTON') {};

//  👉 Checks:
//  • “Was the clicked element a button?”
//  ✔️ If yes → run code
//  ❌ If not → ignore

//* 🧠 Key Concept (Very Important)
//  • Event delegation listens on the parent… but reacts to the child

//* 🔥 Bonus Improvement (More Flexible)

//  Instead of checking tag name:

if (e.target.matches('button')) {};

//  👉 More modern and flexible

//* 📊 Assessment
//  • Event delegation concept → 8/10
//  • Use of e.target → 8/10
//  • Handling edge cases → 6.5/10
//  👉 You’re very close to mastering this

//# 🤔 Reflection

//  Why is this dangerous?

threeButtons.addEventListener('click', (e) => {
    e.target.textContent = 'Clicked!';
});

//  👉 Think about real apps with many elements
//  Answer: The original code is "dangerous" because it lacks input validation. It assumes every click inside the container is intended for a button, which is rarely true in a professional UI.

//# 🤔 Final Reflection (Quick Check)

//  If you click a <span> inside a <button> inside the container:
//  👉 What will e.target be?
//  Answer: The "e.target" will be the element that was actually clicked — the <span> inside the <button> if is clicked on the <span> itself. If we click the <button>, we will use "e.currentTarget" instead. If the click handler is on the div container, and we click the <span> inside the <button>, then "e.target" is the <span>, not the div container or the <button>.

//TODO  👉 Next Step

//  Now you are ready for something powerful:
//  👉 Using e.target + data to control behavior (real-world pattern)

//* 🧠 Final Concept: e.target + Data Attributes

//? 🔍 Concept Explanation
//  Sometimes we have multiple elements that should do different things.
//  Instead of writing lots of if statements like:

if (button1, clicked) {'Some code or text.'};
if (button2, clicked) {'Some code or text.'};

//  👉 We attach data directly to elements.

//? 💡 What are Data Attributes?

//  In HTML:
```html
<button data-action="like">Like</button>
<button data-action="delete">Delete</button>
<button data-action="edit">Edit</button>
```
//  👉 data-action is custom data we define

//? 💻 JavaScript Access

e.target.dataset.action

//  👉 This gives:
//  • "like"
//  • "delete"
//  • "edit"

//? 🧩 Full Example

```HTML
<div id="actions">
    <button data-action="like">👍Like</button>
    <button data-action="delete">🗑️ Delete</button>
    <button data-action="edit">✒️ Edit</button>
</div>

<p id="output">No action yet</p>
```

```JavaScript
const actions = document.getElementById('actions');
const output = document.getElementById('output');

actions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const action = e.target.dataset.action;

        if (action === 'like') {
            output.textContent = 'You liked this!';
        }

        if (action === 'delete') {
            output.textContent = 'Item deleted!';
        }

        if (action === 'edit') {
            output.textContent = 'Editing item...';
        }
    }
});
```

//* 🧠 Why This Is Powerful

//  👉 You now have:
//  • One event listener
//  • Multiple behaviors
//  • Clean, scalable logic

//* 🔥 Real-World Use Cases
//  • Navigation menus
//  • To-do apps (edit/delete items)
//  • Dashboards
//  • Buttons with different roles

//! ⚠️ Common Mistakes
//  ❌ Forgetting data- prefix in HTML
//  ❌ Using "e.target.action" instead of "e.target.dataset.action"
//  ❌ Not checking if it is a button

//? 🧩 Your Final Exercise

//  🎯 Build This:
//  Create:

//  HTML:
//  • 3–4 buttons with different data-action

//  Behavior:
//  • One event listener (on parent)
//  • Display different messages based on action

//* ✅ Success Criteria
//  • Only one event listener
//  • No separate listeners per button
//  • Correct message for each action

//# 🤔 Reflection

//  Why is this better than doing:
//  • if (button1) ...
//  • if (button2) ...
//  • if (button3) ...
//  Think in terms of scalability.

//  Answer: One listener is usually better for scalability when many elements do the same kind of thing. It reduces repeated code, uses less memory, and makes future changes easier because you update one handler instead of many. With one delegated listener on a parent element, the browser handles clicks for all child buttons through bubbling, so new matching buttons can work automatically without adding new listeners.

//! Feedback

//? 🧠 Overall Assessment

//  👉 This is correct, clean, and scalable
//  You demonstrated:
//  ✅ Event delegation
//  ✅ Proper use of e.target
//  ✅ Correct use of dataset
//  ✅ Conditional logic based on data
//  ✅ One listener controlling multiple behaviors
//  👉 This is exactly how real applications are built

//? 🔍 Detailed Review

//* 1. 🧱 HTML Structure — ✔️ Very Good

/<button type="button" data-action="focus">🔭 Focus</button>

//  ✔️ Correct use of data-action
//  ✔️ Clear naming
//  ✔️ Easy to extend
//  👉 You could add 10 more buttons and your JS would still work

//* 2. 🧠 Event Delegation — ✔️ Correct

newExercise.addEventListener('click', (e) => {'Some code or text.'});

//  ✔️ Listener on parent
//  ✔️ Efficient
//  ✔️ Scalable

//* 3. 🎯 Target Filtering — ✔️ Correct

if (e.target.tagName === 'BUTTON') {};

//  ✔️ Prevents unwanted behavior
//  ✔️ Good defensive coding

//* 4. 🧠 Data Usage — ✔️ Excellent

const exercise = e.target.dataset.action;

//  ✔️ Clean
//  ✔️ Dynamic
//  ✔️ Exactly what this lesson is about

//* 5. ⚙️ Logic — ✔️ Works, but can be improved

if (exercise === 'focus') {'Some code or text.'};
if (exercise === 'hover') {'Some code or text.'};
if (exercise === 'select') {'Some code or text.'};

//! ⚠️ Improvement Opportunity
//  Right now:
//  • All if statements are checked every time
//  👉 Not a bug, but not optimal

//# ✅ Better Version (Cleaner)

if (exercise === 'focus') {
    actionMessage.textContent = 'Just focus';
} else if (exercise === 'hover') {
    actionMessage.textContent = 'You hover the button';
} else if (exercise === 'select') {
    actionMessage.textContent = 'Select the button';
}

//  👉 Stops checking once a match is found

//* 🔥 Even Better (Advanced Pattern)

const messages = {
    focus: 'Just focus',
    hover: 'You hover the button',
    select: 'Select the button'
};

actionMessage.textContent = messages[exercise];

//  👉 This is how real apps scale

//* 🧠 What You’ve Just Achieved

//  You now understand:
//  ✅ Event Object (e)
//  ✅ e.target
//  ✅ Event Delegation
//  ✅ Dynamic Behavior with Data
//  👉 This is a major milestone

//* 📊 Final Skill Assessment (Lesson 4)
//  Event object understanding → 8.5–9/10
//  Practical usage → 8.5/10
//  Real-world thinking → 8/10
//  👉 You are now beyond beginner level in this topic

//# 🤔 Final Reflection

//  If you had 20 buttons, would your code need to change?
//  Answer: No, it would not need to change much if the 20 buttons all live inside newExercise and keep the same data-action pattern. 
//  Why or why not?
//  Answer: The code already uses event delegation, so one listener on the parent can handle clicks on any matching button inside it. The click handler is attached to newExercise, not to each button, and it checks e.target.tagName === 'BUTTON' before reading dataset.action. That means adding more buttons does not require adding more event listeners, as long as they are buttons inside that container.

newExercise.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button || !newExercise.contains(button)) return;

    const messages = {
        focus: 'Just focus',
        hover: 'You hover the button',
        select: 'Select the button'
    };

    actionMessage.textContent = messages[button.dataset.action] || '';
});

//TODO  🚀 Step 2: Slightly Harder Challenge (Real-World Style)

//  Now let’s level up.

//? 🧩 Challenge: Action Panel (Real UI Pattern)

//* 🎯 Goal
//  Build a system where:
//  • Multiple buttons perform different actions
//  • One event listener controls everything
//  • UI updates dynamically

//* 🧱 HTML can be found in index.html

//* 🎯 Requirements
//  When clicking buttons:
//  | Action    | Result              |
//  | --------- | ------------------- |
//  | like      | "You liked this 👍" |
//  | subscribe | "Subscribed 🔔"     |
//  | share     | "Shared 📤"         |

//* 🔥 Extra Challenge (Important)
//  👉 Highlight the clicked button:
//  • Add a style (e.g. background color)
//  • Remove it from others

//* 💡 Hint

const action = e.target.dataset.action;

//* ✅ Success Criteria
//  • One event listener
//  • Correct message per button
//  • Only one button highlighted at a time

//# 🤔 Reflection

//  How would you remove the highlight from all buttons before adding it to one?
//  Answer: I will use "querySelectorAll" to remove the highlight class from every button first, then add it to the clicked one. This is the standard pattern for making one button active at a time.

//! Feedback

//TODO  🧠 Overall Assessment

//  👉 This is clean, scalable, and thoughtful
//  You have correctly used:
//  • ✅ Event delegation
//  • ✅ e.target filtering
//  • ✅ dataset for behavior control
//  • ✅ Conditional logic
//  • ✅ Timeout handling (advanced touch)
//  👉 This is now practical frontend logic, not just learning exercises

//* 🔍 Detailed Review

//? 1. 🎯 Event Delegation — ✔️ Excellent

if (e.target.tagName !== 'BUTTON') return;

//  ✔️ Clean early exit
//  ✔️ Prevents unnecessary nesting
//  ✔️ Very good pattern

//? 2. 🧠 Behavior Control — ✔️ Correct

//  const action = e.target.dataset.action;

//  ✔️ Dynamic
//  ✔️ Scalable
//  ✔️ Matches real-world usage

//? 3. ⚙️ Logic — ✔️ Good

if (action === 'like') 'Some code or text.';
else if (action === 'subscribe') 'Some code or text.';
else if (action === 'share') 'Some code or text.';

//  ✔️ Works perfectly
//  ✔️ Clear mapping

//? 4. 🎨 Visual Feedback — ⚠️ Partially Meets Requirement

button.style.backgroundColor = 'green';

//  ✔️ Highlights clicked button
//  ✔️ Good UX feedback

//! ❗ But the requirement was:

//  “Only one button highlighted at a time”

//  👉 Your current behavior:
//  • Click "Like"          → green
//  • Click "Subscribe"     → ALSO green
//  • Now multiple buttons are green ❌

//* ✅ Fix (Important Upgrade)

//  Before highlighting the clicked button:
//  👉 Remove highlight from all buttons

const buttons = panel.querySelectorAll('button');
buttons.forEach(btn => btn.style.backgroundColor = '');

//? 5. ⏱️ Timeout Logic — 🔥 Advanced (But Optional)

clearTimeout(timeoutId);

//  ✔️ Prevents stacking
//  ✔️ Shows strong thinking

//  BUT:
//  👉 It conflicts slightly with the requirement:
//  • Highlight should persist until another click

//# 💡 Recommendation

//  Remove timeout for cleaner behavior:

let timeoutId;

clearTimeout(timeoutId); timeoutId = setTimeout(() => {
    button.style.backgroundColor = originalColor;
    status.textContent = 'No action yet';
}, 800);

//  👉 Now it behaves like a real UI selection system

//* 🧠 Key Insight From Your Code

//  You are now thinking about:
//  • User experience
//  • Edge cases
//  • State consistency
//  👉 That’s a major step forward

//# 🤔 Reflection

//  Why is this better UX:
//  • Keeping the selected button highlighted?
//  Answer: Keeping the selected button highlighted is usually better UX because it gives persistent feedback that the action is still selected or active. The user can immediately see what they clicked even after the message changes, which reduces uncertainty and makes the interface feel more stable.

//  instead of:
//  • Resetting it after 800ms?
//  Answer: A highlight that stays on communicates “this is the current choice,” while an 800ms flash can disappear before the user even processes it.

