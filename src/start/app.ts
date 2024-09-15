import express from 'express';
import morgan from 'morgan';
import { AppRoutes } from '../presentation/app.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(AppRoutes.routes);

export default app;