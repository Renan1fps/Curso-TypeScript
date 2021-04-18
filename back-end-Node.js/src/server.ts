import express, { request, response } from "express";

const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({ message: "Pegando usuarios" });
});

app.get("/users/:id", (request, response) => {
    const id = request.query;
    console.log(id)
    return response.json("finish")
  });

app.post("/users/1", (request, response) => {
  const { id, name, age } = request.body;
  return response.json({ id: id, name: name, age: age });
});

app.post("/users", (request, response) => {
  return response.json({ message: "Criando usuario" });
});
app.put("/users", (request, response) => {
  return response.json({ message: "Atualizando usuario" });
});
app.delete("/users", (request, response) => {
  return response.json({ message: "Deletenado usuario" });
});

app.listen(8080, () => {
  console.log("Back-end is running");
});
