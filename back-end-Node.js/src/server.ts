import express, { response } from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json({ message: "Pegando usuarios" });
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
