import express  from "express";
import mustache from "mustache-express";
import path from "path";
import dotenv  from "dotenv";
import mainRoutes from './routes/index';

// PORTA ENV 
dotenv.config(); 

const server = express();

// config template CONFIGURADO

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache());

// CONFIG A PASTA PÚBLICA

server.use(express.static(path.join(__dirname, '../public')));

// ROTAS

server.use(mainRoutes);

server.use((req,res)=>{
    res.send('Página nao encontrada!');
});

server.listen(process.env.PORT);


