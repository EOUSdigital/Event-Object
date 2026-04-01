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























































































































