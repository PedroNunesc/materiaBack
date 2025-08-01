import express, { Application, Request, Response } from "express";

const app = express();
const PORT: number = 4000;
const SeuNome: String = "Pedro Nunes"

app.use(express.json()) // Define que a API trabalhará com json

app.get("/", (req: Request, res: Response): Response => {
    return res.send("Servidor está funcionando perfeitamente 🚀");
});

app.get("/meunome", (req: Request, res: Response): Response => {
    res.send(`Olá, meu nome é ${SeuNome}!`)
    return res;
});

app.listen(PORT, () => console.log(`
Servidor está funcionando perfeitamente 🚀!
Servidor rodando em http://localhost:${PORT}`));
