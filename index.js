// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let title = "Virgin Mobile";
var num = 10;
var num2 = 15;
var sum = title + num + num2 + title;

appDiv.innerHTML = "<h1>" + title + sum + "</h1>";