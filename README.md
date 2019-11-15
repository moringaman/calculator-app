# Javascript Calculator

## Introduction

Thank you for your interest in this simple calculator program

I decided to write this simple browser based calculator using vanilla javascript so that it had a low file size and overhead as it did not require an entire framework to build in the required functionality.

I have used some bootstrap syles for the buttons which are arranged using css. All the calculator elements are arranged using a nested css grid.

App.js which is the the entry point for the app is written in an object orientated style and simply caches the dom elements and binds them to event handlers which inturn call functions which return results from an imported calculator class to be displayed on the screen.

The main functionality of the calculator is provided by the calculator class which evaluates and returns values and method calls passed to it app.js for display.

I chose this aproach for it's modularity, readability and reusability. the calculator class can easily be used by various front ends and can be scaled to add more finctionality for use by a more complex fron end possibly. The calculator class could also be used by an api of as a cloud function if required in future.

I hope you find this approach easy to follow.

thanks & enjoy.

Rob


## Usage Instructions

### Launching the app

#### In order to launch the app

1. Install a local http server such as http-server with ``npm install -g http-server``

2. Navigate to the dist folder and type the command ``http-server``

3. Browse to http://localhost:8080 and use calculator as normal


### Running Tests

#### To run tests simply

1. Navigate via the terminal to the root of the project

2. Type the command ``npm run test`` 