// Any JS in here is automatically run

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
// Create a component
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};
// Render this component on the screen
  // To actually show the component, we also need the ReactDOM library
  // It is made specifically to interact with the HTML DOM (Document Object Model)
// Meteor.startup is a function that we pass a function to
  // The code inside of this passed function will not run until Meteor has loaded and the DOM is fully rendered, etc.
Meteor.startup(() => {
// The ReactDOM.render method takes two arguments: the component to render, and where to render it
  // The document.querySelector method is regular JS
  // In plain english: Use the ReactDOM library to render an instance of the App component in some HTML element with the class 'container'
  ReactDOM.render(<App />, document.querySelector('.container'));
});