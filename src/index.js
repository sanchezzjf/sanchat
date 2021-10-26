import express from "express";
import { defaultRouter } from "./routes/defaultRoutes.js";
import { logger } from "./util/logger.js";
import Handlebars from "express-handlebars";

const PORT = process.env.PORT || 8080
const app = express();

//handlebars
app.engine('handlebars',Handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use('/', defaultRouter);

app.listen(PORT, () => {
    logger.info(`Server running at http://localhost:${PORT}`)
})