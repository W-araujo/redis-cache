import express from 'express';
import { routes } from './routes/routes';

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
