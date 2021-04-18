import express, { request, response } from "express";

const app = express();
app.use(express.json());

interface User {
  name: string;
  email: string;
  id: string;
}

const users: User[] = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { id, name, email } = request.body;
  const user = { id: id, name: name, email: email };
  users.push(user);
  return response.json(user);
});
app.put("/users/:id", (request, response) => {
  const id = request.params.id;
  const { name, email } = request.body;
  const userIndex = users.findIndex((user) =>  user.id === id);
  if (userIndex != undefined) {
    const user = { id, name, email };
    users[userIndex] = user;
    return response.json(user);
  } else {
    response.status(404).json({ error: "User not found" });
  }
});
app.delete("/users/:id", (request, response) => {
  const { id } = request.params;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex != undefined) {
    users.splice(userIndex, 1);
    return response.status(204).send()
  } else {
    response.status(404).json({ error: "User not found" });
  }
});
app.get("/users/:id", (request, response) => {
  const id = request.params
  console.log(id);
  return response.json("finish");
});

app.listen(8080, () => {
  console.log("Back-end is running");
});
