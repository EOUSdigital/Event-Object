"use strict";

//Title 🟧 Module 8 - Events: Lesson 04. Event Object

//? 🧩 Guided Practice (Mini Task)

const displayBtn = document.getElementById('displayBtn');
const elementText = document.getElementById('elementText');

const originalText = displayBtn.textContent;

displayBtn.addEventListener('click', (e) => {
    elementText.textContent = `Clicked: ${originalText} ~ Event: ${e.type}`;
    e.target.textContent = 'Clicked!';
});

//? 🧩 Handling Multiple Elements with e.target

const handling = document.getElementById('handling');

handling.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});

//? 🧩 Your Next Task

const threeButtons = document.getElementById('threeButtons');

threeButtons.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
        e.target.textContent = 'Clicked!';
    }
});

//? 🧩 Data Attributes

const actions = document.getElementById('actions');
const output = document.getElementById('output');

actions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const action = e.target.dataset.action;
        
        if (action === 'like') {
            output.textContent = 'You like this!';
        }
        
        if (action === 'delete') {
            output.textContent = 'Item deleted!';
        }

        if (action === 'edit') {
            output.textContent = 'Editing item...';
        }
    }
});

//? 🧩 New Exercise

const newExercise = document.getElementById('newExercise');
const actionMessage = document.getElementById('actionMessage');

newExercise.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const exercise = e.target.dataset.action;

        if (exercise === 'focus') {
            actionMessage.textContent = 'Just focus';
        } else if (exercise === 'hover') {
            actionMessage.textContent = 'You hover the button';
        } else if (exercise === 'select') {
            actionMessage.textContent = 'Select the button';
        }
    }
});

//? 🧩 Challenge: Action Panel (Real UI Pattern)

const panel = document.getElementById('panel');
const status = document.getElementById('status');

panel.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const action = e.target.dataset.action;

    const buttons = panel.querySelectorAll('button');
    buttons.forEach(btn => btn.style.backgroundColor = '');

    if (action === 'like') status.textContent = 'You liked this 👍';
    else if (action === 'subscribe') status.textContent = 'Subscribed 🔔';
    else if (action === 'share') status.textContent = 'Shared 📤';
    else return;

    e.target.style.backgroundColor = 'green';
});




