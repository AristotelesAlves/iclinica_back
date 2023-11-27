import  Express  from "express";
import cors from "cors";
import { router } from "./Router";
import { prismaClient } from "./prisma";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);
app.listen((4444), () => console.log(`servidor rodando na porta 4444`))