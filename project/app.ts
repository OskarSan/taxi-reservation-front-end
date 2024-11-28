import express, {Express} from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";


const app: Express = express();
const PORT: number = 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});