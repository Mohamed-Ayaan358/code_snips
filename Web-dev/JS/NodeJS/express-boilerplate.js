const express = require("express");
const app = express();

/* In this code, i've used a basic list to emulate a
 * database.
 * Note that this will not persist data, and for that
 * you will have to use a proper DB like MongoDB.
 */
let tasks = [
  {
    body: "Complete notes application",
    done: false,
  },
  {
    body: "Take fluffy to a walk",
    done: true,
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello, World!");
});

app.get("/tasks", (req, res) => {
  return res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  return res.json(tasks[req.params.id - 1]);
});

app.post("/tasks", (req, res) => {
  const { body } = req.body;
  const newTask = { body, done: false };
  tasks.push(newTask);
  return res.json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const { body, done } = req.body;
  tasks[req.params.id - 1] = {
    body,
    done,
  };
  return res.json(tasks[req.params.id - 1]);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((_, index) => index !== req.params.id - 1);
  return res.json(tasks);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
