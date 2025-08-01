import express, {Application} from "express";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json()); // Define que minha api trabalha com json

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})