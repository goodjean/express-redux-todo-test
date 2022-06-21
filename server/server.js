import express from "express";
const app = express();
const port = 5000;

app.use(express.json({ extended: false }));

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { email, password, name } = req.body;
  const newUser = {
    name,
    email,
    password,
  };
  users.push(newUser);
  res.json(users);
});

app.listen(port, () => {
  console.log("Server running on 5000 port");
});
