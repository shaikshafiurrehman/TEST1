
const express = require('express');
const app = express();

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id); // parse the ID parameter as an integer
  const result = data.filter(item => item.id === id); // use filter method to find the object with the matching ID

  if (result.length === 0) {
    res.status(404).send('Object not found'); // send a 404 error if no object is found
  } else {
    res.send(result[0]); // send the matching object as a response
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
