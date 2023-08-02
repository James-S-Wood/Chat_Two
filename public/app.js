// Your JavaScript code goes here
console.log("Welcome to Chat_Two!");
fetch('/api/hello')
    .then(response => response.json())
    .then(data => console.log(data.message));