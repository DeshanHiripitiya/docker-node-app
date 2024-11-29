const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// fetch post
app.get('/posts', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// fetch post by id
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on: ${PORT}`);
});
