import cors from "cors";
import path from 'path';
import express from "express";
import { fileURLToPath } from 'url';
import { clientlibsRouterWrapper, pagesRouterWrapper } from './routers/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    origin: "*"
  })
)

app.use('/clientlibs', clientlibsRouterWrapper(path.resolve(`${__dirname}../../../clientlibs`)));

app.use('/games', pagesRouterWrapper(path.resolve(`${__dirname}../../pages`)));

app.listen(4000, () => console.log('React MI Application Up'));