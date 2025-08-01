import express, { Application, Request, Response } from "express";

const app = express();
const PORT: number = 3000;

app.use(express.json()) // Define que a API trabalhará com json

app.get("/", (req: Request, res: Response): Response => {
    return res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => console.log(`Servidor rodando em https://localhost:${PORT}`));
