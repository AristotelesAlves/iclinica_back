import  Express  from "express";
import cors from "cors";
import { router } from "./Router";

const app = Express();

console.log('teste');

app.use(Express.json());
app.use(cors());
app.use(router);
app.listen((4444), () => console.log("Servidor rodando na porta 4444..."))