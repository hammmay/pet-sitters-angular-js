# Neighborhood Pet Sitters

#### By Laura Hamilton

## Description

This application is a demonstration of JavaScript Angular using Firebase database with multiple page routes. A user can add, delete, and edit sitter details.

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## System Requirements

* npm 3 or higher
* bower
* Firebase Account

## Installation
|Follow these steps to launch the application|
|---|
|1.) Clone project from github|
|2.) Navigate to the project folder|
|3.) In the console: npm install|
|4.) In the console: bower install bootstrap --save|
|5.) Create a api-keys.ts file within the src/app/ folder|
|6.) Place this code in the api-keys.ts file and replace the "x" characters with your own credentials from your own firebase app code:
 export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };|
|---|
|7.) In the console: ng serve|
|8.) (optional) If the build is unsuccessful and you see a "polyfill" error, run this in the console before trying the ng serve command again: npm install promise-polyfill --save-exact|
|9.) Navigate to http://localhost:4200/|

## Technologies Used

* TypeScript
* Bootstrap
* Bower
* Firebase
* Angular
* npm

## Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User clicks on the About or the Roster in the header and they are redirected to an About page or a Roster page respectively|User clicks on About in the header|User is taken to the About page|
|User clicks on the Admin in the footer and they are redirected to a page where a sitter can be added|User clicks on Admin in the footer|User is taken to the Add New Sitter Admin page|
|User clicks on the name of a sitter from either the admin page or the roster page and they are redirected to a page that gives additional details about the sitter|User clicks on a sitter named "Mary" in the roster|User is taken to Mary's details page|
|On the admin page, a user types in the field to add a new volunteer sitter and clicks on the Add Volunteer! button to save the entry to the roster|User enters text into each field for a new volunteer before clicking the Add Volunteer! button|User sees the new entry saved on the roster|
|On the admin page, a user types in any field within the update this volunteer section, and the changes reflect instantly on the volunteer entry with the option to save these changes with the Update button|User changes a volunteer named Mary, to Marie and then presses the Update button|User sees Marie instead of Mary on the roster and volunteer's details page|
|On the admin page, a user hits the Delete This Volunteer button and a prompt appears to ask if they want to delete the entry before deleting them everywhere if confirmed|User presses the Delete This Volunteer button for a volunteer named Marie and confirms in the prompt window|The volunteer Marie is deleted from all volunteer lists|

### Legal

Copyright (c) 2017 Laura Hamilton laurahamilton9@gmail.com

This software is licensed under the MIT license.
