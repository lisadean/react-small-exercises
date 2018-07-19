# reactSmallExercises

## Drawing boxes

* Start a new react app with the create-react-app command line tool.
* Create a function component called "Box"
* A Box should render a div with className="box"
* In the index.css file, create a style for .box so that each one is 50px by 50px and has a border
* Import Box component into App.js
* Modify the App's render method to draw 5 boxes to the page

## Passing props

* Modify your Box function component so that it expects props
* In the render method in App.js, pass each Box a prop called "message"
* Set the value of each message prop to one of the weekday names ("Monday", "Tuesday", etc.)
* In the Box function component, output the message prop inside the div

## Listening for an event

* Write a function in your Box.js called "printMessage"
* Add a console.log to printMessage so that it says "hello from the box!"
* Add a button inside the div rendered by your Box function component
* Add an onClick to your button and set its value to {printMessage} (without any quotes)