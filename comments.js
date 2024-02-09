//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create comments
const comments

//Create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});

//Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Path: index.js
const fetch = require('node-fetch');

fetch('http://localhost:3000/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));

//Run the index.js file
// $ node index.js
```

###